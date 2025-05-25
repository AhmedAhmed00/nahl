import { useFieldArray } from "react-hook-form";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import styled from "styled-components";
import "react-phone-input-2/lib/style.css"; // Import styles
import FormRow from "./FormRow";
import Heading from "./Heading";
import { StyledDivider } from "./Divider";
import DatePickerInput from "./DatePicker";
import Select from "./Select";
import { daysOfWeek } from "./AppoimentsForBranch";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppointmentRow = styled.div`
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

export default function Appointments({ control, register, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "appointments", // Must match form field name
  });

  return (
    <Container>
      <Heading
        style={{ color: "var(--grey-color)", marginTop: "10px" }}
        as="h4"
      >
        Appointments
      </Heading>
      <StyledDivider />

      {fields.map((field, index) => (
        <AppointmentRow key={field.id}>
          <FormRow
            orientation="vertical"
            label="Start Time"
            error={errors?.appointments?.[index]?.start_time?.message}
          >
            <DatePickerInput
              control={control}
              name={`appointments.${index}.start_time`}
            />
          </FormRow>

          <FormRow
            orientation="vertical"
            label="End Time"
            error={errors?.appointments?.[index]?.end_time?.message}
          >
            <DatePickerInput
              control={control}
              name={`appointments.${index}.end_time`}
            />
          </FormRow>

          <FormRow
            orientation="vertical"
            label="Day"
            error={errors?.appointments?.[index]?.day?.message}
          >
            <Select
              control={control}
              name={`appointments.${index}.day`}
              items={daysOfWeek}
              chooseValue="id"
            />
          </FormRow>

          <Icons>
            <CiCirclePlus
              size={22}
              onClick={() => append({ start_time: "", end_time: "", day: "" })}
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
        </AppointmentRow>
      ))}
    </Container>
  );
}
