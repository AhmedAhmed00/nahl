import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import toast from "react-hot-toast";

import Form from "../../../ui/Form";
import FormRow from "../../../ui/FormRow";
import { InputsRow } from "../../../ui/InputsRow";
import Input from "../../../ui/Input";
import Select from "../../../ui/Select";
import Row from "../../../ui/Row";
import Button from "../../../ui/Button";
import Spinner from "../../../ui/Spinner";
import ToggleSwitch from "../../../ui/ToogleSwitch";
import SelectJobRole from "../../../ui/Selectors/SelectJobRole";
import { StyledPhoneInput } from "../../../ui/PhoneNumbers";

import useValidate from "../../../hooks/useValidate";
import useFetchById from "../../../hooks/useFetchById";
import useDetectMode from "../../../hooks/useDetectMode";
import useCreateEmployee from "./useCreateEmployee";
import useUpdateEmployee from "./useUpdateEmployee";

import { employeeServices } from "../../../services/apiEmployees";
import { jobRolesServices } from "../../../services/apiJobRoles";

import { adStatus, toastWarn } from "../../../data/selectData";
import {
  compareChanges,
  filterObject,
  setServerErrors,
} from "../../../utils/helpers";

import EmployeeSchema from "../../../schemas/EmployeeSchema";
import { t } from "i18next";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 30px 0 20px;
  gap: 30px;
`;

function EmployeeForm() {
  const [jobId, setJobId] = useState(null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const navigate = useNavigate();
  const { setTitle } = useOutletContext();
  const { id, isEditingSession } = useDetectMode();

  const {
    handleSubmit,
    formState: { errors, dirtyFields },
    register,
    setError,
    control,
    watch,
    reset,
  } = useForm({
    defaultValues: {},
    resolver: !isEditingSession
      ? zodResolver(EmployeeSchema(false))
      : undefined,
  });

  const { addNewEmployee, addingStatus } = useCreateEmployee();
  const { updateExistingEmployee, updatingStatus } = useUpdateEmployee();
  const isLoadingBtn =
    addingStatus === "loading" || updatingStatus === "loading";

  const jobRoleId = watch("job_role");

  const { data: employee, isLoading: isLoadingEmployee } = useFetchById(
    "employee",
    id,
    employeeServices.getById
  );

  const {
    data: { permissions } = {},
    isLoading: isLoadingPermissions,
    isFetching: isFetchingPermissions,
  } = useFetchById("permissionOfJob", jobId, jobRolesServices.getById, 0);

  useEffect(() => {
    if (jobRoleId) setJobId(jobRoleId);
  }, [jobRoleId]);

  useEffect(() => {
    if (isEditingSession && employee) {
      setTitle("Manage Employees > Update Employee");

      reset({
        ...employee,
        name: employee.user?.name,
        email: employee.user?.email,
        phone: employee.user?.phone,
        job_role: employee.job_role?.id,
        custom_permissions:
          employee.custom_permissions?.filter(Boolean).map((p) => p?.id) || [],
      });

      setJobId(employee.job_role?.id);
    }
  }, [isEditingSession, employee, reset, setTitle]);

  useEffect(() => {
    if (!isLoadingPermissions) {
      setIsFirstLoad(false);
    }
  }, [isLoadingPermissions]);

  const validate = useValidate(errors);

  if (
    isEditingSession &&
    (isLoadingEmployee || (isFirstLoad && isLoadingPermissions))
  ) {
    return <Spinner />;
  }

  function onSubmit(values) {
    const filtered = filterObject(values);
    const arrOfPermissions = filtered.permissions;

    if (isEditingSession) {
      const updatedFields = compareChanges(values, dirtyFields);
      if (Object.keys(updatedFields).length > 0) {
        updateExistingEmployee(
          { id, body: updatedFields },
          {
            onSuccess: () => navigate("/management/employees"),
            onError: (error) => setServerErrors(error, setError),
          }
        );
      } else {
        toast("There is no changes to update", toastWarn);
      }
    } else {
      addNewEmployee(
        { ...values, arrOfPermissions },
        {
          onSuccess: () => navigate("/management/employees"),
          onError: (error) => setServerErrors(error, setError),
        }
      );
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsRow>
          <FormRow error={validate("name")} label={t("dataKeys.name")}>
            <Input {...register("name")} />
          </FormRow>
          <FormRow error={validate("email")} label={t("dataKeys.email")}>
            <Input {...register("email")} />
          </FormRow>
        </InputsRow>

        <InputsRow>
          <FormRow error={validate("password")} label={t("dataKeys.password")}>
            <Input type="password" {...register("password")} />
          </FormRow>
          <FormRow error={validate("job_role")} label={t("dataKeys.jobRole")}>
            <SelectJobRole control={control} name="job_role" />
          </FormRow>
        </InputsRow>

        {isLoadingPermissions && isFetchingPermissions ? (
          <Spinner />
        ) : (
          jobRoleId && (
            <Container>
              {permissions?.filter(Boolean).map((permission) => (
                <ToggleSwitch
                  key={permission.id}
                  control={control}
                  name="custom_permissions"
                  permission={permission}
                />
              ))}
            </Container>
          )
        )}

        <InputsRow>
          <FormRow label={t("dataKeys.status")} error={validate("status")}>
            <Select
              items={adStatus}
              chooseValue="name"
              control={control}
              name="status"
            />
          </FormRow>
          <FormRow
            error={validate("phone")}
            orientation="vertical"
            label={t("dataKeys.phone")}
          >
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <StyledPhoneInput country="eg" {...field} />
              )}
            />
          </FormRow>
        </InputsRow>

        <Row
          size="meduim"
          margin="25px 0"
          type="horizontal"
          justify="end"
          gap="15px"
        >
          <Button isLoading={isLoadingBtn} size="medium" $variation="primary">
            {isEditingSession ? "Update Employee" : t("addButtons.addEmployee")}
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default EmployeeForm;
