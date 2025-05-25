import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const SwitchContainer = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
  font-size: 16px;
  cursor: pointer;
  text-transform: capitalize;
`;

const Switch = styled.div`
  width: 40px;
  height: 20px;
  background: ${({ isOn }) => (isOn ? "#4CAF50" : "#ccc")};
  border-radius: 20px;
  position: relative;
  transition: background 0.3s ease-in-out;
`;

const ToggleCircle = styled.div`
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: ${({ isOn }) => (isOn ? "calc(100% - 17px)" : "2px")};
  transform: translateY(-50%);
  transition: left 0.3s ease-in-out;
`;

const ToggleSwitch = ({
  control,
  name,
  permission,
  renderValue,
  chooseValue = null,
}) => {
  const {
    field: { value: permissions = [], onChange },
  } = useController({ name, control });

  // Determine the unique value for this permission (id or dynamic field)
  const permissionValue = chooseValue ? permission[chooseValue] : permission.id;

  // Check if permission is active (included)
  const isActive = permissions.includes(permissionValue);

  const togglePermission = () => {
    if (isActive) {
      onChange(permissions.filter((val) => val !== permissionValue));
    } else {
      onChange([...permissions, permissionValue]);
    }
  };

  return (
    <SwitchContainer>
      <p>{permission[renderValue] || permission.name}</p>
      <Switch isOn={isActive} onClick={togglePermission}>
        <ToggleCircle isOn={isActive} />
      </Switch>
    </SwitchContainer>
  );
};

export default ToggleSwitch;
