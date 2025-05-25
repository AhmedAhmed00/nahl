import { useFieldArray } from "react-hook-form";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import styled from "styled-components";
import "react-phone-input-2/lib/style.css"; // Import styles
import FormRow from "./FormRow";
import Input from "./Input";
import Heading from "./Heading";
import { StyledDivider } from "./Divider";
import Select from "./Select";
import Row from "./Row";
import { InputsRow } from "./InputsRow";
import SearchableSelect from "./SearchableSelect";
import { useInfiniteCities } from "../features/Location/City/useInfinteCities";
import SelectCity from "./Selectors/SelelctCity";
import SelectRegionToCity from "./Selectors/SelectRegionToCity";
import { MdAdd, MdDelete } from "react-icons/md";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default function BranchesContainer({
  control,
  register,
  errors,
  index,
  onRemove,
  showRemove,
  watch,
}) {
  return (
    <Container>
      <Heading
        style={{ color: "var(--grey-color)", margin: "0px 0px 15px 0px" }}
        as="h2"
      >
        Branch {index + 1}
      </Heading>

      <Row>
        <InputsRow>
          <FormRow
            label="Name"
            error={errors?.branches?.[index]?.name?.message}
          >
            <Input {...register(`branches.${index}.name`)} />
          </FormRow>

          <FormRow
            label="Name arabic"
            error={errors?.branches?.[index]?.name_ar?.message}
          >
            <Input {...register(`branches.${index}.name_ar`)} />
          </FormRow>
        </InputsRow>
        <InputsRow>
          <FormRow
            label="Address"
            error={errors?.branches?.[index]?.address?.message}
          >
            <Input {...register(`branches.${index}.address`)} />
          </FormRow>

          <FormRow
            label="City"
            error={errors?.branches?.[index]?.city?.message}
          >
            <SelectCity
              watch={watch}
              control={control}
              name={`branches.${index}.city`}
            />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow
            label="Region"
            error={errors?.branches?.[index]?.region?.message}
          >
            <SelectRegionToCity
              control={control}
              name={`branches.${index}.region`}
            />
          </FormRow>

          <FormRow></FormRow>
        </InputsRow>
      </Row>
    </Container>
  );
}
