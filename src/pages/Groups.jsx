import { Section } from "../ui/Container";
import { OperationsContainer } from "../ui/OperationsContainer";
import Row from "../ui/Row";
import { useTranslation } from "react-i18next";
import TableOperations from "../ui/table/TableOperations";
import SearchInput from "../ui/SearchInput";
import GroupsTable from "../features/groups/GroupsTable";

function Groups() {
  const { t } = useTranslation();
  return (
    // <Section title={t("routes.groups")}>
    <>
      <OperationsContainer>
        <SearchInput />
        <TableOperations
          addPath={"/groups/groups-form"}
          addTitle={t("addButtons.addGroup")}
        />
      </OperationsContainer>
      <Row>
        <GroupsTable />
      </Row>
    </>
    // </Section>
  );
}
export default Groups;
