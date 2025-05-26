import GenericTable from "../../ui/table/GenericTable";
import { renderRow } from "../../ui/RenderRow";
import { REVIEW_MANGEMENT } from "../../data/gridKeys";
import ReviewRow from "./ReviewRow";

function ReviewsTable() {
  return (
    <>
      <GenericTable
        headers={REVIEW_MANGEMENT}
        data={[]}
        renderRow={renderRow(ReviewRow)}
        pageSize={20}
        resaultsCount={20}
        isLoading={false}
      />
    </>
  );
}

export default ReviewsTable;
