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
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import { Section } from "../../ui/Container";
import styled from "styled-components";
import FileInput from "../../ui/FileInput";
import InputsHeader from "../../ui/InputsHeader";

function VendorForm() {
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
    defaultValues: {},
  });

  const validate = useValidate(errors);

  return (
    <Section title={t("addTitles.addNewVendor")}>
      <Form>
        <InputsHeader
          index={1}
          key={1}
          head={t("groupInputHeader.basicInfo")}
        />
        <InputsRow>
          <FormRow error={validate("name")} label={t("dataKeys.name")}>
            <Input {...register("name")} />
          </FormRow>
          <FormRow error={validate("email")} label={t("dataKeys.email")}>
            <Input {...register("email")} />
          </FormRow>

          <FormRow error={validate("phone")} label={t("dataKeys.phone")}>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <StyledPhoneInput country="eg" {...field} />
              )}
            />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow error={validate("password")} label={t("dataKeys.password")}>
            <Input {...register("password")} />
          </FormRow>
          <FormRow
            error={validate("confirmPassword")}
            label={t("dataKeys.confirmPassword")}
          >
            <Input {...register("confirmPassword")} />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow
            error={validate("profilePic")}
            label={t("dataKeys.profilePic")}
          >
            <FileInput control={control} name="profilePic" />
          </FormRow>
        </InputsRow>

        <InputsHeader
          index={2}
          key={2}
          head={t("groupInputHeader.storeDetails")}
        />

        <InputsRow>
          <FormRow
            error={validate("storeName")}
            label={t("dataKeys.storeName")}
          >
            <Input {...register("storeName")} />
          </FormRow>
          <FormRow
            error={validate("websiteLink")}
            label={t("dataKeys.websiteLink")}
          >
            <Input {...register("websiteLink")} />
          </FormRow>
          <FormRow
            error={validate("storeAddress")}
            label={t("dataKeys.storeAddress")}
          >
            <Input {...register("storeAddress")} />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow
            error={validate("description")}
            label={t("dataKeys.description")}
          >
            <Input {...register("description")} />
          </FormRow>
          <FormRow error={validate("location")} label={t("dataKeys.location")}>
            <Input {...register("location")} />
          </FormRow>
        </InputsRow>
        <InputsRow>
          <FormRow
            error={validate("storeLogo")}
            label={t("dataKeys.storeLogo")}
          >
            <FileInput control={control} name="storeLogo" />
          </FormRow>
        </InputsRow>
        <InputsHeader
          head={t("groupInputHeader.financialSetting")}
          index={3}
          key={3}
        />

        <InputsRow>
          <FormRow
            error={validate("paymentMethod")}
            label={t("dataKeys.paymentMethod")}
          >
            <Input {...register("paymentMethod")} />
          </FormRow>
          <FormRow
            error={validate("bankAccount")}
            label={t("dataKeys.bankAccount")}
          >
            <Input {...register("bankAccount")} />
          </FormRow>
          <FormRow
            error={validate("commission")}
            label={t("dataKeys.commission")}
          >
            <Input {...register("commission")} />
          </FormRow>
        </InputsRow>

        <Button isLoading={false} size="medium" $variation="primary">
          {isEditingSession
            ? t("updateButtons.updateDoctor")
            : t("addButtons.addVendor")}
        </Button>
      </Form>
    </Section>
  );
}

export default VendorForm;
