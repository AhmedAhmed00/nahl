import { useNavigate } from "react-router-dom";
import useDetectMode from "../../../hooks/useDetectMode";
import useFetchById from "../../../hooks/useFetchById";
import { jobRolesServices } from "../../../services/apiJobRoles";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Spinner from "../../../ui/Spinner";
import Form from "../../../ui/Form";
import { InputsRow } from "../../../ui/InputsRow";
import FormRow from "../../../ui/FormRow";
import Input from "../../../ui/Input";
import ToggleSwitch from "../../../ui/ToogleSwitch";
import Row from "../../../ui/Row";
import Button from "../../../ui/Button";
import styled from "styled-components";
import usePermissions from "./usePermissions";
import { filterObject, setServerErrors } from "../../../utils/helpers";
import usePost from "../../../hooks/usePost";
import useUpdate from "../../../hooks/useUpdate";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
  gap: 30px;
`;

function JobRolesForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id, isEditingSession } = useDetectMode();
  const { permissions, isLoading: isLoadingPermissions } = usePermissions();

  const { data: job } = useFetchById("job-role", id, jobRolesServices.getById);

  console.log("permissions", permissions);

  const { mutate: addNewJob, addingStatus } = usePost({
    service: jobRolesServices.create,
    key: "job-role",
    resourse: "Job Role",
  });
  const { mutate: updateExistingJob, updatingStatus } = useUpdate({
    key: "job-role",
    resourse: "Job Role",
    service: jobRolesServices.update,
  });

  const isLoadingBtn =
    updatingStatus === "loading" || addingStatus === "loading";

  const {
    handleSubmit,

    register,

    setError,

    control,
    reset,
  } = useForm({
    defaultValues: {
      name: [],
      permissions: [],
    },
  });

  useEffect(() => {
    if (isEditingSession) {
      reset({
        ...job,
        permissions: job?.permissions?.map((p) => p?.id) || [],
      });
    }
  }, [isEditingSession, job, reset]);

  if (isLoadingPermissions && isEditingSession) return <Spinner />;

  function onSubmit(values) {
    const filteredObj = Object.entries(filterObject(values))
      .filter(([key]) => key !== "name")
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
    console.log("filterObject", filteredObj);
    const arrOfPermissions = filteredObj.permissions;

    const body = {
      name: values.name,
      permissions: arrOfPermissions,
    };

    isEditingSession
      ? updateExistingJob(
          { id, body },
          {
            onSuccess: () => navigate(-1),
            onError: (error) => setServerErrors(error, setError),
          }
        )
      : addNewJob(body, {
          onSuccess: () => navigate(-1),
          onError: (error) => setServerErrors(error, setError),
        });
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsRow>
          <FormRow label={t("dataKeys.name")}>
            <Input
              {...register("name", {
                required: { message: "Name Is Required" },
              })}
            />
          </FormRow>
          <FormRow></FormRow>
        </InputsRow>

        <Container>
          {permissions?.map(
            (permission) =>
              permission !== null && (
                <ToggleSwitch
                  key={permission?.id} // ✅ Add key to prevent re-renders
                  control={control}
                  name="permissions"
                  permission={permission}
                />
              )
          )}
        </Container>

        <Row margin="50px 0px" type="horizontal" justify="end" gap="15px">
          <Button isLoading={isLoadingBtn} size="medium" variation="primary">
            {isEditingSession ? "Update Job" : "Add Job"}
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default JobRolesForm;
