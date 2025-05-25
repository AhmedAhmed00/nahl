import { useTranslation } from "react-i18next";
import Empty from "../Empty";
import Pagination from "../Pagination";
import Spinner from "../Spinner";
import { Footer, Table } from "./Table";
import { TableHead } from "./TableHead";
import { TableHeader } from "./TableHeader";

export default function GenericTable({
  data,
  headers,
  renderRow,
  pageSize,
  resaultsCount,
  isNotPaginated,
  isLoading,
}) {
  const { t } = useTranslation();
  return (
    <Table role="table">
      <TableHeader cols={headers.length} role="row">
        {headers.map((head) => (
          <TableHead key={head}>{t(`dataKeys.${head}`)}</TableHead>
        ))}
      </TableHeader>

      {data?.length === 0 && <Empty />}

      {isLoading ? <Spinner /> : data?.map(renderRow)}

      {isNotPaginated || isLoading || !data?.length || !data ? (
        ""
      ) : (
        <Footer>
          <Pagination pageSize={pageSize} resaultsCount={resaultsCount} />
        </Footer>
      )}
    </Table>
  );
}
