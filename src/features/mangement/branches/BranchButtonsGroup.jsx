import React from "react";
import Row from "../../../ui/Row";
import { MdAdd, MdDelete } from "react-icons/md";
import Button from "../../../ui/Button";

export default function BranchButtonsGroup({
  branchFields,
  removeBranch,
  index,
  appendBranch,
  appendBranchErrMsg,
  setappendBranchErrMsg,
  trigger,
}) {
  async function handleAppendBranch() {
    const isValid = await trigger();
    if (isValid) {
      if (appendBranchErrMsg) {
        setappendBranchErrMsg(null);
      }
      appendBranch({
        name: "",
        name_en: "",
        address: "",
        city: "",
        region: "",
        schedules: [{ start_time: "", end_time: "", day_of_week: "" }],
      });
    } else {
      setappendBranchErrMsg("Fill correct in the previous branch firstly");
    }
  }

  return (
    <Row gap="14px" type="horizontal" width="fit-content">
      {branchFields.length > 1 && (
        <Row width="fit-content" type="vertical">
          <Button
            type="button"
            variation="danger"
            size="small"
            onClick={() => removeBranch(index)}
          >
            <Row type="horizontal">
              <MdDelete size={19} />
              <p>Delete this branch {`#${index + 1}`}</p>
            </Row>
          </Button>
        </Row>
      )}

      {branchFields.length === index + 1 && (
        <Button
          type="button"
          variation="primary"
          size="small"
          onClick={() => handleAppendBranch()}
        >
          <Row type="horizontal">
            <MdAdd size={22} />
            <p>Insert another branch</p>
          </Row>
        </Button>
      )}
    </Row>
  );
}
