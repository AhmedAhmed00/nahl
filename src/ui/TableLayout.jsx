import { TableLayoutStyles } from "../pages/vendor-details/VendorDetails";
import Row from "./Row";

export const TableLayout = ({ children }) => {
  return <Row style={TableLayoutStyles}>{children}</Row>;
};
