import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import useFilters from "../hooks/useFilter";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
`;

export const SearchInputStyle = styled.input.attrs((props) => ({
  placeholder:
    props.placeholder ||
    (props.$isRTL ? "إبحث ؟" : "What are you looking for...?"),
}))`
  border-radius: 8px;
  border: 1px solid var(--color-grey-300);
  outline: none;
  /* Swap padding-left and padding-right for RTL */
  padding: 4px ${(props) => (props.$isRTL ? "36px" : "30px")} 4px
    ${(props) => (props.$isRTL ? "38px" : "38px")};
  height: 38px;
  width: 99%;
  font-size: 14px;
`;

const Icon = styled.span`
  position: absolute;
  top: 55%;
  ${(props) => (props.$isRTL ? "right: 12px;" : "left: 12px;")}
  transform: translateY(-50%);
  font-size: 2rem;
  color: var(--color-grey-500);
  pointer-events: none;
`;

export default function SearchInput() {
  const { handleFilter } = useFilters();
  const { i18n: { language, dir } = {} } = useTranslation();
  const isRTL = dir === "rtl" || language === "ar";

  return (
    <Wrapper>
      <Icon $isRTL={isRTL}>
        <IoSearchOutline />
      </Icon>
      <SearchInputStyle
        $isRTL={isRTL}
        placeholder={isRTL ? "إبحث ؟" : "What are you looking for...?"}
        onChange={(e) => handleFilter({ search: e.target.value })}
      />
    </Wrapper>
  );
}
