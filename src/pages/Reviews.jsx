import useModal from "../hooks/useModal";
import { Section } from "../ui/Container";
import { OperationsContainer } from "../ui/OperationsContainer";
import Row from "../ui/Row";
import SearchInput from "../ui/SearchInput";
import TableOperations from "../ui/table/TableOperations";

import { useTranslation } from "react-i18next";
import ReviewsTable from "../features/reviews/ReviewsTable";

// Styled Select with placeholder

function Reviews() {
  const { t, i18n: { language } = {} } = useTranslation();

  return (
    <>
      {/* <Section title={t("routes.reviews")}> */}
      <OperationsContainer>
        <SearchInput />

        <TableOperations />
      </OperationsContainer>

      <Row>
        <ReviewsTable />
      </Row>
    </>
  );
}

export default Reviews;
