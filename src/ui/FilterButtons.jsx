import React from "react";
import Button from "./Button";
import Row from "./Row";

export default function FilterButtons({ handleClose }) {
  return (
    <Row margin="20px 0px 0px 0px" type="horizontal" justify="start" gap="15px">
      <Button
        onClick={handleClose}
        type="button"
        size="medium"
        variation="secondary"
      >
        إلغاء
      </Button>
      <Button type="submit" size="medium" variation="primary">
        تصفية
      </Button>
    </Row>
  );
}
