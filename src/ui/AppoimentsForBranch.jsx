import { useFieldArray } from "react-hook-form";
import Heading from "./Heading";
import styled from "styled-components";
import FormRow, { Error } from "./FormRow";
import { TimePickerInput } from "./DatePicker";
import Select from "./Select";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

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

export function AppoimentsForBranch({
  control,
  register,
  errors,
  branchIndex,
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `branches.${branchIndex}.schedules`,
  });
  return (
    <>
      <Heading style={{ color: "var(--grey-color)" }} as="h5">
        Appointments for Branch {branchIndex + 1}
      </Heading>

      {fields.map((field, index) => (
        <>
          <AppointmentRow key={field.id}>
            <FormRow
              orientation="vertical"
              label="Start Time"
              error={
                errors?.branches?.[branchIndex]?.schedules?.[index]?.start_time
                  ?.message
              }
            >
              <TimePickerInput
                control={control}
                name={`branches.${branchIndex}.schedules.${index}.start_time`}
              />
            </FormRow>

            <FormRow
              orientation="vertical"
              label="End Time"
              error={
                errors?.branches?.[branchIndex]?.schedules?.[index]?.end_time
                  ?.message
              }
            >
              <TimePickerInput
                control={control}
                name={`branches.${branchIndex}.schedules.${index}.end_time`}
              />
            </FormRow>

            <FormRow
              orientation="vertical"
              label="Day of week"
              error={
                errors?.branches?.[branchIndex]?.schedules?.[index]?.day_of_week
                  ?.message
              }
            >
              <Select
                control={control}
                name={`branches.${branchIndex}.schedules.${index}.day_of_week`}
                items={daysOfWeek}
                chooseValue="id"
              />
            </FormRow>

            <Icons>
              <CiCirclePlus
                size={22}
                onClick={() =>
                  append({ start_time: "", end_time: "", day_of_week: "" })
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
          </AppointmentRow>
        </>
      ))}
    </>
  );
}

export const daysOfWeek = [
  { id: "0", name: "Sunday" },
  { id: "1", name: "Monday" },
  { id: "2", name: "Tuesday" },
  { id: "3", name: "Wednesday" },
  { id: "4", name: "Thursday" },
  { id: "5", name: "Friday" },
  { id: "6", name: "Saturday" },
];
