import { useFieldArray } from "react-hook-form";
import { InputsRow } from "../../ui/InputsRow";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useTranslation } from "react-i18next";
import FileInput from "../../ui/FileInput";
import ButtonIcon from "../../ui/ButtonIcon";
import { IoAddCircleOutline } from "react-icons/io5";
import Row from "../../ui/Row";
import { TiDeleteOutline } from "react-icons/ti";

export default function ProductDetails({ control, register, validate }) {
  const { t } = useTranslation();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "productDetails",
  });

  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id}>
          <InputsRow>
            <FormRow
              label={t("dataKeys.color")}
              error={validate(`productDetails.${index}.color`)}
            >
              <Input {...register(`productDetails.${index}.color`)} />
            </FormRow>

            <FormRow
              label={t("dataKeys.price")}
              error={validate(`productDetails.${index}.price`)}
            >
              <Input {...register(`productDetails.${index}.price`)} />
            </FormRow>

            <FormRow
              label={t("dataKeys.discountPrice")}
              error={validate(`productDetails.${index}.discountPrice`)}
            >
              <Input {...register(`productDetails.${index}.discountPrice`)} />
            </FormRow>
          </InputsRow>

          <InputsRow>
            <FormRow
              label={t("dataKeys.image")}
              error={validate(`productDetails.${index}.image`)}
            >
              <FileInput
                control={control}
                name={`productDetails.${index}.image`}
              />
            </FormRow>

            <Row type="horizontal" items="center" justify="center">
              {fields.length > 1 && (
                <ButtonIcon type="button" onClick={() => remove(index)}>
                  <TiDeleteOutline color="red" />
                </ButtonIcon>
              )}

              <ButtonIcon
                type="button"
                onClick={() =>
                  append({
                    color: "",
                    price: "",
                    discountPrice: "",
                    profilePic: null,
                  })
                }
              >
                <IoAddCircleOutline />
              </ButtonIcon>
            </Row>
          </InputsRow>
        </div>
      ))}
    </>
  );
}
