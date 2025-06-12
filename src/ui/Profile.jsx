import React, { useState, useRef, useEffect } from "react";
import {
  BsPerson,
  BsGear,
  BsBoxArrowRight,
  BsX,
  BsEye,
  BsEyeSlash,
} from "react-icons/bs";
import { useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import { useAuth } from "../context/AuthContext";
import useUpdate from "../hooks/useUpdate";
import { changePassServices } from "../data/api";
import usePost from "../hooks/usePost";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Styled components
export const StyledProfile = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Popup = styled.div`
  position: absolute;
  top: calc(100% + 15px);
  right: 0;
  background: white;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 280px;
  z-index: 100;
  animation: ${fadeIn} 0.2s ease-out forwards;
  transform-origin: top right;

  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    right: 20px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent white transparent;
    filter: drop-shadow(0 -2px 1px rgba(0, 0, 0, 0.05));
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid #f5f5f5;
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-size: 24px;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #212529;
`;

const UserPhone = styled.div`
  font-size: 14px;
  color: #6c757d;
  margin-top: 4px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  color: #495057;

  &:hover {
    background: #f8f9fa;
    color: #000;
  }

  svg {
    font-size: 18px;
  }
`;

const LoadingSkeleton = styled.div`
  background: #f0f2f5;
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  animation: ${fadeIn} 0.2s ease-out forwards;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #6c757d;
  padding: 0;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
`;

const PrimaryButton = styled(Button)`
  background: var(--color-primary);
  color: white;
  border: none;

  &:hover {
    background: #0b5ed7;
  }
`;

const SecondaryButton = styled(Button)`
  background: white;
  color: #6c757d;
  border: 1px solid #dee2e6;

  &:hover {
    background: #f8f9fa;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  color: #495057;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #86b7fe;
    box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.25);
  }

  &.error {
    border-color: #dc3545;
  }
`;

const PasswordInputWrapper = styled.div`
  position: relative;
`;

const EyeIcon = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #6c757d;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const PasswordInput = styled(FormInput)`
  padding-left: 40px;
`;

const ErrorMessage = styled.span`
  display: block;
  margin-top: 6px;
  font-size: 12px;
  color: #dc3545;
`;

const Profile = ({ size }) => {
  const queryClient = useQueryClient();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const profileRef = useRef(null);
  const { profile, isLoadingProfile } = useAuth();

  // Password visibility states
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const openPasswordModal = () => {
    setIsModalOpen(true);
    setIsPopupOpen(false);
    reset();
  };

  const closePasswordModal = () => {
    setIsModalOpen(false);
  };

  const { mutate: updatePass } = usePost({
    service: changePassServices.create,
    key: "profile",
    resourse: "الرقم السري",
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Password change data:", data);
    updatePass(
      {
        old_password: data.currentPassword,
        new_password: data.newPassword,
        confirm_new_password: data.confirmPassword,
      },
      {
        onSuccess: () => {
          toast.success("تم تغيير كلمة السر");
          closePasswordModal();
        },
        onError: (err) => {
          console.log(err, "errrrrrrrrrrrrr");

          const msg =
            err?.data?.detail ||
            err?.data?.message ||
            "حدث خطأ غير متوقع، من فضلك حاول مرة أخرى.";

          toast.error(msg);
        },
      }
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={profileRef}>
      <StyledProfile>
        <BsPerson
          onClick={togglePopup}
          style={{
            display: "block",
            color: isPopupOpen ? "#ffffff" : "#d4dbdb",
            transition: "color 0.2s ease",
          }}
          cursor={"pointer"}
          size={size}
        />
        {isPopupOpen && (
          <Popup>
            <ProfileHeader>
              {isLoadingProfile ? (
                <>
                  <Avatar
                    as={LoadingSkeleton}
                    style={{ width: 48, height: 48 }}
                  />
                  <UserInfo>
                    <UserName
                      as={LoadingSkeleton}
                      style={{ width: 120, height: 20 }}
                    />
                    <UserPhone
                      as={LoadingSkeleton}
                      style={{ width: 100, height: 16, marginTop: 8 }}
                    />
                  </UserInfo>
                </>
              ) : (
                <>
                  <Avatar>
                    <BsPerson size={24} />
                  </Avatar>
                  <UserInfo>
                    <UserName>{profile?.name || "User"}</UserName>
                    <UserPhone>
                      {profile?.phone_number || "+00000000000"}
                    </UserPhone>
                  </UserInfo>
                </>
              )}
            </ProfileHeader>

            <MenuItem onClick={openPasswordModal}>
              <BsGear />
              <span>تغيير كلمة السر</span>
            </MenuItem>
            <MenuItem style={{ color: "#dc3545" }}>
              <BsBoxArrowRight />
              <span
                onClick={() => {
                  console.log("in function");
                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("refreshToken");
                  navigate("/auth");
                  queryClient.removeQueries();
                }}
              >
                تسجيل الخروج
              </span>
            </MenuItem>
          </Popup>
        )}
      </StyledProfile>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>تغيير كلمة السر</ModalTitle>
              <CloseButton onClick={closePasswordModal}>
                <BsX />
              </CloseButton>
            </ModalHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <FormLabel>كلمة السر الحالية</FormLabel>
                <PasswordInputWrapper>
                  <PasswordInput
                    type={showCurrentPassword ? "text" : "password"}
                    className={errors.currentPassword ? "error" : ""}
                    {...register("currentPassword", {
                      required: "هذا الحقل مطلوب",
                      minLength: {
                        value: 6,
                        message: "يجب أن تكون كلمة السر على الأقل 6 أحرف",
                      },
                    })}
                  />
                  <EyeIcon
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? <BsEyeSlash /> : <BsEye />}
                  </EyeIcon>
                </PasswordInputWrapper>
                {errors.currentPassword && (
                  <ErrorMessage>{errors.currentPassword.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel>كلمة السر الجديدة</FormLabel>
                <PasswordInputWrapper>
                  <PasswordInput
                    type={showNewPassword ? "text" : "password"}
                    className={errors.newPassword ? "error" : ""}
                    {...register("newPassword", {
                      required: "هذا الحقل مطلوب",
                      minLength: {
                        value: 6,
                        message: "يجب أن تكون كلمة السر على الأقل 6 أحرف",
                      },
                      validate: (value) =>
                        value !== watch("currentPassword") ||
                        "يجب أن تكون كلمة السر الجديدة مختلفة عن الحالية",
                    })}
                  />
                  <EyeIcon onClick={() => setShowNewPassword(!showNewPassword)}>
                    {showNewPassword ? <BsEyeSlash /> : <BsEye />}
                  </EyeIcon>
                </PasswordInputWrapper>
                {errors.newPassword && (
                  <ErrorMessage>{errors.newPassword.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel>تأكيد كلمة السر الجديدة</FormLabel>
                <PasswordInputWrapper>
                  <PasswordInput
                    type={showConfirmPassword ? "text" : "password"}
                    className={errors.confirmPassword ? "error" : ""}
                    {...register("confirmPassword", {
                      required: "هذا الحقل مطلوب",
                      validate: (value) =>
                        value === watch("newPassword") ||
                        "كلمة السر غير متطابقة",
                    })}
                  />
                  <EyeIcon
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
                  </EyeIcon>
                </PasswordInputWrapper>
                {errors.confirmPassword && (
                  <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
                )}
              </FormGroup>

              <ModalFooter>
                <SecondaryButton type="button" onClick={closePasswordModal}>
                  إلغاء
                </SecondaryButton>
                <PrimaryButton type="submit">تأكيد</PrimaryButton>
              </ModalFooter>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

export default Profile;
