import { ClientsTable } from "../features/clients/ClientsTable";
import { Container } from "../ui/Container";
import Row from "../ui/Row";

function Clients() {
  return (
    <Container>
      <Row>
        <ClientsTable />
      </Row>
    </Container>
  );
}

export default Clients;
