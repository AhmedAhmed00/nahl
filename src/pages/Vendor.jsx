import VendorTable from "../features/vendor/VendorTable";
import { Section } from "../ui/Container";
import Row from "../ui/Row";

function Vendor() {
  return (
    <Section title={"Vendor"}>
      <Row>
        <VendorTable />
      </Row>
    </Section>
  );
}
export default Vendor;
