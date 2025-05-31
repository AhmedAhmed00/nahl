import { useTranslation } from "react-i18next";
import Button from "./Button";
import Row from "./Row";

export default function FilterButtons({ handleClose }) {
  const { t } = useTranslation();
  return (
    <Row margin="20px 0 0 0" type="horizontal" justify="start" $gap="22px">
      <Button
        onClick={handleClose}
        type="button"
        size="medium"
        variation="secondary"
      >
        {t("common.cancel")}
      </Button>
      <Button
        onClick={handleClose}
        type="submit"
        size="medium"
        variation="primary"
      >
        {t("common.apply")}
      </Button>
    </Row>
  );
}
