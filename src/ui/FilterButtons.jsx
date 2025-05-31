import Button from "./Button";
import Row from "./Row";

export default function FilterButtons({ handleClose }) {
  return (
    <Row margin="20px 0 0 0" type="horizontal" justify="start" $gap="15px">
      <Button
        onClick={handleClose}
        type="button"
        size="medium"
        variation="secondary"
      >
        إلغاء
      </Button>
      <Button
        onClick={handleClose}
        type="submit"
        size="medium"
        variation="primary"
      >
        تصفية
      </Button>
    </Row>
  );
}
