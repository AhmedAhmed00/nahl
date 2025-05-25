import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import useFilters from "../hooks/useFilter";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

// const P = styled.p`
//   font-size: 1.4rem;
//   margin-left: 0.8rem;

//   & span {
//     font-weight: 600;
//   }
// `;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-primary)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  outline: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-primary);
    color: var(--color-brand-50);
  }
`;

export default function Pagination({ resaultsCount, pageSize }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(resaultsCount / pageSize);

  // Generate an array of page numbers
  const pageNumbers = Array.from(
    { length: pageCount },
    (_, index) => index + 1
  );

  // Handle page change
  const handlePageChange = (page) => {
    setSearchParams({ page });
    // handleFilters({ page: page });
  };

  return (
    <StyledPagination>
      <Buttons>
        <PaginationButton
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <HiChevronLeft />
        </PaginationButton>

        {pageNumbers.map((page) => (
          <PaginationButton
            key={page}
            active={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </PaginationButton>
        ))}
        <PaginationButton
          disabled={currentPage === pageCount}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}
