import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useValidate from "../../hooks/useValidate";
import { useEffect } from "react";
import {
  compareChanges,
  prepareFormData,
  setServerErrors,
} from "../../utils/helpers";
import Form from "../../ui/Form";
import { InputsRow } from "../../ui/InputsRow";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import Select from "../../ui/Select";
import { adStatus, toastWarn } from "../../data/selectData";
import FileInput from "../../ui/FileInput";
import AdSchema from "../../schemas/AdSchema";
import toast from "react-hot-toast";
import usePost from "../../hooks/usePost";
import { adsServices } from "../../services/apiAds";
import useUpdate from "../../hooks/useUpdate";
import { useTranslation } from "react-i18next";

function AdForm({ handleClose, state = null }) {
  const { t } = useTranslation();
  const {
    handleSubmit,
    formState: { errors, dirtyFields },
    register,
    setError,
    control,
    reset,
  } = useForm({
    defaultValues: {},
    resolver: !state ? zodResolver(AdSchema) : undefined, // in case of state there is no validation
  });

  const { mutate: addNewAd, addingStatus } = usePost({
    service: adsServices.create,
    key: "ads",
    resourse: "Ads",
  });

  const {
    mutate: updatecExistingAd,
    isErrorUpdatihg,
    updatingStatus,
  } = useUpdate({
    service: adsServices.update,
    key: "ads",
    resourse: "Ad",
  });

  const validate = useValidate(errors);

  const isLoading = addingStatus === "loading" || updatingStatus === "loading";

  useEffect(() => {
    if (state) {
      reset({
        ...state,
      });
    }
  }, [state, reset]);

  const onSubmit = (values) => {
    const onSuccess = () => handleClose();
    const onError = (error) => setServerErrors(error, setError);
    const data = prepareFormData(values);
    if (!state) addNewAd(data, { onSuccess, onError });
    else {
      const newValues = compareChanges(values, dirtyFields);
      if (!Object.keys(newValues).length) {
        toast("There is no changes on the form", toastWarn);
      } else {
        updatecExistingAd(
          { id: state.id, body: newValues },
          { onError, onSuccess }
        );
      }
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsRow dir="column">
          <FormRow error={validate("image")} label={t("dataKeys.name")}>
            <FileInput control={control} name="image" />
          </FormRow>
          <FormRow error={validate("title")} label={t("dataKeys.title")}>
            <Input {...register("title")} />
          </FormRow>
          <FormRow error={validate("status")} label={t("dataKeys.status")}>
            <Select
              name="status"
              control={control}
              items={adStatus}
              chooseValue="name"
              renderValue="name"
              placeholder="Select an option"
            />
          </FormRow>
        </InputsRow>

        <Row margin="20px 10px" type="horizontal" justify="end" gap="15px">
          <Button isLoading={isLoading} size="medium" $variation="primary">
            {state ? "Update Ad" : t("addButtons.addAdd")}
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default AdForm;
