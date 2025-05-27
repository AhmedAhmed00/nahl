import { useQueryClient } from "@tanstack/react-query";
import useDetectMode from "../../hooks/useDetectMode";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import useValidate from "../../hooks/useValidate";
import Form from "../../ui/Form";
import { InputsRow } from "../../ui/InputsRow";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { StyledPhoneInput } from "../../ui/PhoneNumbers";
import Button from "../../ui/Button";
import { Section } from "../../ui/Container";
import styled from "styled-components";
import FileInput from "../../ui/FileInput";
import InputsHeader from "../../ui/InputsHeader";
import { Textarea } from "../../ui/Textarea";
import ProductDetails from "./ProductDetails";

function ProductForm() {
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
      productDetails: [{ name: "test" }],
    },
  });

  const validate = useValidate(errors);

  return (
    <Section title={t("addTitles.addNewProduct")}>
      <Form>
        <InputsHeader
          index={1}
          key={1}
          head={t("groupInputHeader.basicInfo")}
        />
        <InputsRow>
          <FormRow
            error={validate("productName")}
            label={t("dataKeys.productName")}
          >
            <Input {...register("productName")} />
          </FormRow>

          <FormRow
            error={validate("vendorName")}
            label={t("dataKeys.vendorName")}
          >
            <Input {...register("vendorName")} />
          </FormRow>

          <FormRow
            error={validate("minQuantity")}
            label={t("dataKeys.minQuantity")}
          >
            <Input {...register("minQuantity")} />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow error={validate("category")} label={t("dataKeys.category")}>
            <Input {...register("category")} />
          </FormRow>

          <FormRow
            error={validate("dimensionAndWeigh")}
            label={t("dataKeys.dimensionAndWeigh")}
          >
            <Input {...register("dimensionAndWeigh")} />
          </FormRow>
          <FormRow error={validate("location")} label={t("dataKeys.location")}>
            <Input {...register("location")} />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow error={validate("stock")} label={t("dataKeys.stock")}>
            <Input control={control} name="stock" />
          </FormRow>
          <FormRow></FormRow>
          <FormRow></FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow
            error={validate("description")}
            label={t("dataKeys.description")}
          >
            <Textarea {...register("description")} />
          </FormRow>
          <FormRow></FormRow>
          <FormRow></FormRow>
        </InputsRow>

        <InputsHeader
          index={2}
          key={2}
          head={t("groupInputHeader.productDetails")}
        />

        <ProductDetails
          control={control}
          register={register}
          validate={validate}
        />

        <Button isLoading={false} size="medium" $variation="primary">
          {isEditingSession
            ? t("updateButtons.updateProduct")
            : t("addButtons.addProduct")}
        </Button>
      </Form>
    </Section>
  );
}

export default ProductForm;
