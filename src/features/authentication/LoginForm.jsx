import { useEffect } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginschema } from "./loginSchema";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { StyledPhoneInput } from "../../ui/PhoneNumbers";

import Profile from "../../ui/Profile";
import { PasswordInput } from "../../ui/inputPassword";

function LoginForm() {
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
    <div
      style={{
        display: "grid",
        placeContent: "center",
        gridTemplateColumns: "38rem",
      }}
    >
      <Form
        style={{
          backgroundColor: "var(--color-brand-1)",
          borderRadius: "35px",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Profile size={170} />

        <FormRow label={"رقم الهاتف"}>
          <Controller
            name="phone_number"
            control={control}
            render={({ field }) => <StyledPhoneInput country="ly" {...field} />}
          />
        </FormRow>

        <FormRow label={"الرقم السري"} orientation="vertical">
        <PasswordInput register={register} name="password" dangerBorder={errors.password} />
        </FormRow>

        <FormRow>
          <Button
            isLoading={isLoading}
            style={{ marginTop: "25px" }}
            size="large"
          >
            تسجيل الدخول
          </Button>
        </FormRow>
      </Form>
    </div>
  );
}

export default LoginForm;
