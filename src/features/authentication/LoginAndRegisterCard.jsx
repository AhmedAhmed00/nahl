import { useEffect } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginschema } from "./loginSchema";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { StyledPhoneInput } from "../../ui/PhoneNumbers";
import { BsPerson } from "react-icons/bs";
import styled from "styled-components";
import { t } from "i18next";

const Profile = styled.div`
  width: 100%;

  height: 250px;
`;

function LoginAndRegisterCard() {
  const navigate = useNavigate();

  const { isLoading, login, accessToken } = useAuth();

  useEffect(() => {
    if (accessToken) navigate("/");
  }, [accessToken, navigate]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginschema),
  });

  async function onSubmit(data) {
    await login(data);
  }

  return (
    <>
      <Profile>
        <BsPerson
          style={{
            display: "block",
            margin: "auto",
            color: "#d4dbdb",
          }}
          size={260}
        />
      </Profile>
      <FormRow label={t("dataKeys.phone")}>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <StyledPhoneInput country="eg" {...field} />}
        />
      </FormRow>

      {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      <div style={{ marginTop: "20px" }}></div>

      <FormRow label={t("dataKeys.password")} orientation="vertical">
        <Input type="password" id="password" {...register("password")} />
      </FormRow>

      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}
      <Button isLoading={isLoading} style={{ marginTop: "25px" }} size="large">
        {t("common.login")}
      </Button>
    </>
  );
}

export default LoginAndRegisterCard;
