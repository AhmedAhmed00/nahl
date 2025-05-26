import { TableRow } from "../../ui/table/TableRow";
import { TableCell } from "../../ui/table/TableCell";
import Actions from "../../ui/Actions";
import useModal from "../../hooks/useModal";
import { createPortal } from "react-dom";
import FormModal from "../../ui/FormModal";
import AdForm from "./AdForm";
import Tag from "../../ui/Tag";
import moment from "moment";

function AdRow({ ad }) {
  const { handleClose, isClosing, openModal, setIsClosing, setOpenModal } =
    useModal();

  if (!ad) return null; //LAAAAAAAAAATER
  const { title, status, created_at } = ad || {};

  return (
    <TableRow cols={4} role="row">
      <TableCell>{title}</TableCell>
      <TableCell>
        <Tag type={status === "active" ? "green" : "red"}> {status}</Tag>
      </TableCell>
      <TableCell>{moment(created_at).format("YYYY:MM:DD HH:mm ")}</TableCell>

      <Actions
        onDelete={() => {}}
        onView={() => {
          setOpenModal(true);
        }}
        onUpdate={() => {
          setOpenModal(true);
        }}
      />
      {openModal &&
        createPortal(
          <FormModal
            isClosing={isClosing}
            setIsClosing={setIsClosing}
            onClose={handleClose}
            handleClose={handleClose}
            form={<AdForm state={ad} handleClose={handleClose} />}
          />,
          document.body
        )}
    </TableRow>
  );
}

export default AdRow;
