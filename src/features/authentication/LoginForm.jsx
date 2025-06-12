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
  height: 150px;
`;

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
        <Profile>
          <BsPerson
            style={{
              display: "block",
              margin: "auto",
              color: "#d4dbdb",
            }}
            size={170}
          />
        </Profile>

        <FormRow label={"رقم الهاتف"}>
          <Controller
            name="phone_number"
            control={control}
            render={({ field }) => <StyledPhoneInput country="ly" {...field} />}
          />
        </FormRow>

        <FormRow label={"الرقم السري"} orientation="vertical">
          <Input type="password" id="password" {...register("password")} />
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
