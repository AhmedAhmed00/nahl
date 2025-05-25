import { useForm, useFieldArray } from "react-hook-form";
import Form from "../../../ui/Form";
import Button from "../../../ui/Button";
import Row from "../../../ui/Row";
import BranchesContainer from "../../../ui/BranchesContainer";
import { DevTool } from "@hookform/devtools";
import { AppoimentsForBranch } from "../../../ui/AppoimentsForBranch";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddBranchSchema } from "../../../schemas/AddBranchesSchema";
import useCreateBranches from "./useCraeteBranches";
import { useEffect, useState } from "react";
import { Error } from "../../../ui/FormRow";
import { StyledDivider } from "../../../ui/Divider";
import BranchButtonsGroup from "./BranchButtonsGroup";
import useDetectMode from "../../../hooks/useDetectMode";
import useFetchById from "../../../hooks/useFetchById";
import { branchesServices } from "../../../data/api";
import Spinner from "../../../ui/Spinner";
import useUpdateBranches from "./useUpdateBranches";
import { setServerErrors } from "../../../utils/helpers";
import { useNavigate } from "react-router-dom";

function BranchesMngementForm() {
  const { addNewBranches, addingStatus } = useCreateBranches();
  const { updateExistingBranches, updatingStatus } = useUpdateBranches();
  const { id, isEditingSession } = useDetectMode();
  const [appendBranchErrMsg, setappendBranchErrMsg] = useState(null);
  const navigate = useNavigate();
  const {
    data: branch = {},
    isError,
    isLoading: isLoadingBranchDetails,
  } = useFetchById("branch", id, branchesServices.getById, 0);
  const isLoading = updatingStatus === "loading" || addingStatus === "loading";

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    watch,
    trigger,
    reset,
    setError,
  } = useForm({
    defaultValues: {
      branches: [
        {
          name: "",
          name_ar: "",
          address: "",
          city: 0,
          region: 0,
          schedules: [
            {
              start_time: "",
              end_time: "",
              day_of_week: "",
            },
          ],
        },
      ],
    },
    resolver: zodResolver(AddBranchSchema),
  });

  useEffect(() => {
    if (isEditingSession && Object.keys(branch).length) {
      const formatedSchedules = branch.schedules.map((s) => ({
        ...s,
        day_of_week: String(s.day_of_week), // Convert only day_of_week to string
      }));
      const defData = { ...branch, schedules: formatedSchedules };
      reset({ branches: [defData] });
    }
  }, [branch, isEditingSession, reset]);
  const {
    fields: branchFields,
    append: appendBranch,
    remove: removeBranch,
  } = useFieldArray({
    control,
    name: "branches",
  });

  const onSubmit = (values) => {
    const body = values.branches;
    const onSuccess = () => navigate(-1);
    const onError = (error) => setServerErrors(error, setError);
    if (isEditingSession) {
      updateExistingBranches({ id: id, body: body[0] }, { onSuccess, onError });
    } else {
      addNewBranches(body, { onSuccess, onError });
    }
  };

  if (isLoadingBranchDetails && isEditingSession) return <Spinner />;
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {branchFields.map((branch, index) => (
          <>
            <Row>
              <BranchesContainer
                watch={watch}
                control={control}
                register={register}
                errors={errors}
                index={index}
              />
              <AppoimentsForBranch
                control={control}
                register={register}
                errors={errors}
                branchIndex={index}
              />
            </Row>
            <Error fs mb="16px">
              {appendBranchErrMsg && appendBranchErrMsg}
            </Error>
            {isEditingSession ? (
              ""
            ) : (
              <>
                <BranchButtonsGroup
                  branchFields={branchFields}
                  appendBranch={appendBranch}
                  removeBranch={removeBranch}
                  setappendBranchErrMsg={setappendBranchErrMsg}
                  appendBranchErrMsg={appendBranchErrMsg}
                  trigger={trigger}
                  index={index}
                  key={index}
                />
                <StyledDivider />
              </>
            )}
          </>
        ))}

        <Row margin="25px 10px" type="horizontal" justify="end" gap="15px">
          <Button isLoading={isLoading} size="medium" $variation="primary">
            {isEditingSession ? "Update Branches" : "Add Branches"}
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default BranchesMngementForm;
