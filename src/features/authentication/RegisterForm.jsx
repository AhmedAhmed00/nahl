import { useEffect } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledPhoneInput } from "../../ui/PhoneNumbers";
import { BsPerson } from "react-icons/bs";
import styled from "styled-components";
import { t } from "i18next";
import { z } from "zod";
import useValidate from "../../hooks/useValidate";
import Profile from "../../ui/Profile";
import { PasswordInput } from "../../ui/inputPassword";

const userSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    phone_number: z
      .string()
      .transform((val) => (val.startsWith("+") ? val : `+${val}`)),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" }),
    confirm_password: z
      .string()
      .min(1, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

function RegisterForm() {
  const navigate = useNavigate();
  const { state: { code } = {} } = useLocation();
  const { isLoading, signUp, accessToken } = useAuth();

  useEffect(() => {
    if (accessToken) navigate("/");
  }, [accessToken, navigate]);

  const methods = useForm({
    resolver: zodResolver(userSchema),
    shouldFocusError: false, // Prevent focus() on error
    defaultValues: {
      name: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  const validate = useValidate(errors);

  async function onSubmit(data) {
    console.log("data");
    console.log(data);
    try {
      const { name, password, phone_number } = data;
      await signUp({ name, phone_number, password, verification_code: code });
    } catch (error) {
      console.error("Registration error:", error);
    }
  }

  return (
    <FormProvider {...methods}>
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
          <Profile size={260} />

          <FormRow
            error={validate("name")}
            label={"إسم المستخدم"}
            orientation="vertical"
          >
            <Input
              placeholder="الإسم"
              type="text"
              id="name"
              disabled={isLoading}
              {...register("name")}
            />
          </FormRow>

          <FormRow
            error={validate("phone_number")}
            label={"رقم الهاتف"}
            orientation="vertical"
          >
            <Controller
              name="phone_number"
              control={control}
              render={({ field }) => (
                <StyledPhoneInput
                  country="ly"
                  prefix="+"
                  disabled={isLoading}
                  {...field}
                  onChange={(value) => field.onChange(value)}
                />
              )}
            />
          </FormRow>

          <FormRow
            error={validate("password")}
            label={"الرقم السري"}
            orientation="vertical"
          >
                    <PasswordInput
                     register={register}  
                       disabled={isLoading}
            placeholder="أدخل الرقم السري"
 name="password" dangerBorder={errors.password}
  />

           
          </FormRow>

          <FormRow
            error={validate("confirm_password")}
            label={"تأكيد الرقم السري"}
            orientation="vertical"
          >






<PasswordInput
                     register={register}  
                       disabled={isLoading}
                       placeholder="أعد كتابة الرقم السري"

 name="confirm_password" dangerBorder={errors.password}
  />



        
          </FormRow>

          <FormRow>
            <Button
              isLoading={isLoading}
              style={{ marginTop: "25px" }}
              size="large"
              type="submit"
              disabled={isLoading}
            >
              إنشاء حساب
            </Button>
          </FormRow>
        </Form>
      </div>
    </FormProvider>
  );
}

export default RegisterForm;
