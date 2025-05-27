import { useTranslation } from "react-i18next";
import { Section } from "../../ui/Container";
import Form from "../../ui/Form";
import { InputsRow } from "../../ui/InputsRow";
import FormRow from "../../ui/FormRow";
import useValidate from "../../hooks/useValidate";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import useDetectMode from "../../hooks/useDetectMode";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";

function DiscountsAndCouponsForm() {
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
    <>
      <Section title={t("addTitles.addDiscountAndCoupon")}>
        <Form>
          <InputsRow>
            <FormRow
              error={validate("discountDate")}
              label={t("dataKeys.discountDate")}
            >
              <Input {...register("discountDate")} />
            </FormRow>

            <FormRow
              error={validate("expireTime")}
              label={t("dataKeys.expireTime")}
            >
              <Input {...register("expireTime")} />
            </FormRow>
          </InputsRow>

          <InputsRow>
            <FormRow
              error={validate("category")}
              label={t("dataKeys.category")}
            >
              <Input {...register("category")} />
            </FormRow>
            <FormRow></FormRow>
          </InputsRow>

          <Button isLoading={false} size="medium" $variation="primary">
            {isEditingSession
              ? t("updateButtons.updateDiscount")
              : t("addButtons.addCoupon")}
          </Button>
        </Form>
      </Section>
    </>
  );
}

export default DiscountsAndCouponsForm;
