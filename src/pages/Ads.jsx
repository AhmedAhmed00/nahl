import { createPortal } from "react-dom";
import AdsTable from "../features/ads/AdsTable";
import useModal from "../hooks/useModal";
import { Container, Section } from "../ui/Container";
import { OperationsContainer } from "../ui/OperationsContainer";
import Row from "../ui/Row";
import SearchInput from "../ui/SearchInput";
import TableOperations from "../ui/table/TableOperations";
import FormModal from "../ui/FormModal";
import AdForm from "../features/ads/AdForm";

import { FilterSelect } from "../ui/FilterSelect";
import { useTranslation } from "react-i18next";

// Styled Select with placeholder

function Ads() {
  const { handleClose, isClosing, setIsClosing, openModal, setOpenModal } =
    useModal();
  const { t, i18n: { language } = {} } = useTranslation();

  return (
    // <Section title={t("routes.ads")}>
    <>
      <OperationsContainer>
        <SearchInput />

        <TableOperations
          addPath={"/ads/ad-form"}
          addTitle={t("addButtons.addAd")}
          filterComponent={
            <FilterSelect
              renderValue={language === "en" ? "name" : "nameAr"}
              filterKey={"status"}
              items={[
                { name: "all", nameAr: "الكل" },
                { name: "active", nameAr: "نشط" },
                { name: "inactive", nameAr: "غير نشط" },
              ]}
            />
          }
        />
      </OperationsContainer>

      <Row>
        <AdsTable />
      </Row>

      {/* {openModal &&
        createPortal(
          <FormModal
            isClosing={isClosing}
            setIsClosing={setIsClosing}
            onClose={handleClose}
            handleClose={handleClose}
            form={<AdForm handleClose={handleClose} />}
          />,
          document.body
        )} */}
    </>
  );
}

export default Ads;
