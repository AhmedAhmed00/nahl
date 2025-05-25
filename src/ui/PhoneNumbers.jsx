import { Controller, useFieldArray } from "react-hook-form";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import styled from "styled-components";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import styles
import FormRow from "./FormRow";
import Input from "./Input";
import Heading from "./Heading";
import { StyledDivider } from "./Divider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhoneRow = styled.div`
  display: flex;
  gap: 25px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  width: 100%;
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledPhoneInput = styled(PhoneInput)`
  .react-tel-input {
    width: 100%;
  }
  .form-control {
    width: 100% !important;
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
  .flag-dropdown {
    border-radius: 8px 0 0 8px;
    border-right: 1px solid #ccc;
  }
`;

export default function PhoneNumbers({ control, register, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "phones", // Must match form field name,
  });

  return (
    <Container>
      <Heading
        style={{ color: "var(--grey-color)", marginTop: "10px" }}
        as="h4"
      >
        الهواتف
      </Heading>
      <StyledDivider />
      {fields.map((field, index) => (
        <PhoneRow key={field.id}>
          <FormRow
            orientation="vertical"
            label="الإسم"
            error={errors?.phones?.[index]?.name?.message}
          >
            <Input {...register(`phones.${index}.name`)} />
          </FormRow>

          {/* Phone Number Input with Controller */}
          <FormRow
            orientation="vertical"
            label="الهاتف"
            error={errors?.phones?.[index]?.phone_number?.message}
          >
            <Controller
              name={`phones.${index}.phone_number`}
              control={control}
              render={({ field }) => (
                <StyledPhoneInput country="eg" {...field} />
              )}
            />
          </FormRow>
          <FormRow
            orientation="vertical"
            label="تعليق"
            error={errors?.phones?.[index]?.comment?.message}
          >
            <Input {...register(`phones.${index}.comment`)} />
          </FormRow>

          {/* Add/Delete Buttons */}
          <Icons>
            <CiCirclePlus
              size={22}
              onClick={() =>
                append({ name: "", phone_number: "", comment: "" })
              }
              style={{ cursor: "pointer", color: "green", marginTop: "30px" }}
            />
            {fields.length > 1 && (
              <CiCircleMinus
                size={22}
                onClick={() => remove(index)}
                style={{ cursor: "pointer", color: "red", marginTop: "30px" }}
              />
            )}
          </Icons>
        </PhoneRow>
      ))}
    </Container>
  );
}
