import { useQueryClient } from "@tanstack/react-query";
import useDetectMode from "../../hooks/useDetectMode";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFieldArray, useForm } from "react-hook-form";
import useValidate from "../../hooks/useValidate";
import Form from "../../ui/Form";
import { InputsRow } from "../../ui/InputsRow";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import { Section } from "../../ui/Container";
import FileInput from "../../ui/FileInput";
import ButtonIcon from "../../ui/ButtonIcon";
import { FiMinus, FiPlus } from "react-icons/fi";

function CategoryForm() {
  const { id, isEditingSession } = useDetectMode();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t, i18n: { language } = {} } = useTranslation();

  const {
    handleSubmit,
    formState: { errors, dirtyFields },
    register,
    control,
    reset,
    watch,
    setError,
  } = useForm({
    defaultValues: {
      subCategories: [{ subCategory: "" }],
    },
  });

  const validate = useValidate(errors);

  return (
    <Section title={t("addButtons.addCategory")}>
      <Form>
        <InputsRow>
          <FormRow
            error={validate("categoryName")}
            label={t("dataKeys.categoryName")}
          >
            <Input {...register("categoryName")} />
          </FormRow>
          <FormRow></FormRow>
        </InputsRow>

        <InputsRow dir="column">
          <SubCategoriesInputList
            control={control}
            register={register}
            errors={errors}
          />
        </InputsRow>

        <InputsRow>
          <FormRow error={validate("image")} label={t("dataKeys.image")}>
            <FileInput control={control} name="profilePic" />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow
            error={validate("imageSubCategory")}
            label={t("dataKeys.imageSubCategory")}
          >
            <FileInput control={control} name="imageSubCategory" />
          </FormRow>
        </InputsRow>

        <Button isLoading={false} size="medium" $variation="primary">
          {isEditingSession
            ? t("updateButtons.updateDoctor")
            : t("addButtons.addCategory")}
        </Button>
      </Form>
    </Section>
  );
}

export default CategoryForm;

function SubCategoriesInputList({ control, register, errors }) {
  const { t } = useTranslation();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subCategories",
  });

  const validate = (name) => {
    const index = parseInt(name.split(".")[1]);
    const fieldError = errors?.subCategories?.[index];
    return fieldError?.subCategory?.message || null;
  };

  return (
    <>
      {fields.map((field, index) => (
        <Row key={field.id} width="50%" $gap="10px" type="horizontal">
          <FormRow
            error={validate(`subCategories.${index}.subCategory`)}
            label={t("dataKeys.subCategory")}
          >
            <Input {...register(`subCategories.${index}.subCategory`)} />
          </FormRow>

          <Row
            style={{
              height: "42px",
              marginTop: "28px",
              display: "flex",
              gap: "10px",
            }}
            justify="center"
            items="center"
            type="horizontal"
            $gap="10px"
          >
            <Row $gap="10px" padding="10px" justify="center" items="center">
              <FiPlus
                cursor={"pointer"}
                style={{}}
                onClick={() => append({ subCategory: "" })}
              />
            </Row>

            {fields.length > 1 && (
              <Row padding="10px" justify="center" items="center">
                <FiMinus
                  cursor={"pointer"}
                  color="red"
                  style={{}}
                  onClick={() => remove(index)}
                />
              </Row>
            )}
          </Row>
        </Row>
      ))}
    </>
  );
}
