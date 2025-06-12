import styled, { keyframes } from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { useRef, useEffect } from "react";
import AuthContainer from "../ui/AuthContainer";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import usePost from "../hooks/usePost";
import { verficationServices } from "../data/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 52rem;
  align-content: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  padding: 2rem;
  margin: auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.3s ease-in;
`;

const CodeInputGroup = styled.div`
  display: flex;
  direction: ltr;
  gap: 1rem;
  justify-content: center;
`;

const CodeInput = styled.input`
  width: 5.5rem;
  height: 5.5rem;
  font-size: 2rem;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  transition: all 0.2s ease;

  &:focus {
    border-color: #007bff;
    background: #eaf4ff;
    outline: none;
  }
`;

const convertArabicToEnglish = (value) =>
  value.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));

function VerificationCode() {
  const { handleSubmit, control, setValue, getValues, watch, reset } =
    useForm();
  const navigate = useNavigate();
  const { setIsVerfied, isVerfied } = useAuth();
  const isSubmittingRef = useRef(false);
  const lastSubmittedCodeRef = useRef("");
  const {
    addingStatus,
    data,
    isErrorAdding,
    mutate: verifyUser,
  } = usePost({
    service: verficationServices.create,
    key: "verfication",
    resourse: "vification",
  });
  const inputRefs = useRef([]);
  const watchedValues = watch();

  const onSubmit = () => {
    const code = Array(6)
      .fill("")
      .map((_, i) => getValues(`digit${i}`))
      .join("");

    // Prevent duplicate submissions of the same code
    if (isSubmittingRef.current || lastSubmittedCodeRef.current === code) {
      return;
    }

    isSubmittingRef.current = true;
    lastSubmittedCodeRef.current = code;

    verifyUser(
      { code },
      {
        onSuccess: () => {
          setIsVerfied(true);
          toast.success("تم التحقق بنجاح");
          navigate("/auth/register", {
            state: {
              code,
            },
          });
        },
        onError: () => {
          toast.error("رمز التحقق خاطئ");
        },
      }
    );
  };

  const handleInput = (e, index, onChange) => {
    let value = convertArabicToEnglish(e.target.value)
      .replace(/\D/g, "")
      .slice(0, 1);

    onChange(value);

    if (value) {
      setTimeout(() => {
        inputRefs.current[index + 1]?.focus();
      }, 0);
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !e.target.value &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = convertArabicToEnglish(
      e.clipboardData.getData("text")
    ).replace(/\D/g, "");
    const digits = pasted.slice(0, 6).split("");

    digits.forEach((digit, i) => {
      setValue(`digit${i}`, digit);
      if (inputRefs.current[i]) inputRefs.current[i].value = digit;
    });

    if (inputRefs.current[digits.length - 1]) {
      inputRefs.current[digits.length - 1].focus();
    }

    e.preventDefault();
  };

  // Auto-submit when all digits are filled
  useEffect(() => {
    const code = Array(6)
      .fill("")
      .map((_, i) => watchedValues[`digit${i}`] || "")
      .join("");

    if (
      code.length === 6 &&
      !isSubmittingRef.current &&
      lastSubmittedCodeRef.current !== code
    ) {
      handleSubmit(onSubmit)();
    }
  }, [watchedValues, handleSubmit]);

  // Reset submission status when API call completes
  useEffect(() => {
    if (addingStatus === "success" || addingStatus === "error") {
      isSubmittingRef.current = false;

      // Clear form after successful submission or error
      setTimeout(() => {
        reset();
        lastSubmittedCodeRef.current = "";
        inputRefs.current[0]?.focus();
      }, 1000); // Give time for toast to show
    }
  }, [addingStatus, reset]);

  // Reset when user starts typing again (clears lastSubmittedCode)
  useEffect(() => {
    const currentCode = Array(6)
      .fill("")
      .map((_, i) => watchedValues[`digit${i}`] || "")
      .join("");

    if (currentCode.length < 6) {
      lastSubmittedCodeRef.current = "";
    }
  }, [watchedValues]);

  return (
    <LoginLayout>
      <AuthContainer>
        <Heading
          as={"h2"}
          style={{
            margin: "auto",
            textAlign: "center",
            marginBottom: "20px",
          }}
          color="light"
        >
          إدخل كود التحقق
        </Heading>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <CodeInputGroup onPaste={handlePaste}>
            {Array.from({ length: 6 }, (_, i) => {
              const isEnabled = i === 0 || watchedValues[`digit${i - 1}`];

              return (
                <Controller
                  key={i}
                  name={`digit${i}`}
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <CodeInput
                      ref={(el) => (inputRefs.current[i] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={value}
                      onChange={(e) => handleInput(e, i, onChange)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      disabled={!isEnabled}
                    />
                  )}
                />
              );
            })}
          </CodeInputGroup>
        </StyledForm>
      </AuthContainer>
    </LoginLayout>
  );
}

export default VerificationCode;
