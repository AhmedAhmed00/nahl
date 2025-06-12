import React, { useState } from "react";
import styled from "styled-components";
import { BsPerson, BsPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function CardComponent({ title, to }) {
  const [isCentered, setIsCentered] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setIsCentered((prev) => !prev);
    setTimeout(() => {
      navigate(to);
    }, 300);
  }

  return (
    <div>
      <Wrapper>
        <BackgroundGlow />
        <Card>
          <ProfileIcon>
            <BsPerson size={110} />
          </ProfileIcon>
          <div
            style={{
              backgroundColor: "#83bad1",
              height: "60px",
              width: "100%",
              borderRadius: "32px",
            }}
          >
            <PlayButton isCentered={isCentered} onClick={handleClick}>
              <BsPlayFill color="467d9b" size={35} />
            </PlayButton>
          </div>
        </Card>
      </Wrapper>
      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "var(--color-light)",
          fontSize: "32px",
        }}
      >
        {title}
      </p>
    </div>
  );
}

// ===== Styled Components =====

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 800px;
  background: radial-gradient(circle, rgb(204, 250, 21) 0%, transparent 45%);
  filter: blur(10px);
  z-index: 0;
  opacity: 0.8;
  @media (max-width: 768px) {
    width: 350px;
  }
`;

const Card = styled.div`
  width: 250px;
  height: 250px;

  background-color: #3787b7;
  border-radius: 26px;
  padding: 20px;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, #facc15 0%, transparent 20%);
    transform: translate(-50%, -50%);
    filter: blur(60px);
    z-index: -1;
    opacity: 0.6;
  }
`;

const ProfileIcon = styled.div`
  margin-bottom: 20px;
  color: #d4dbdb;
`;

const PlayButton = styled.button`
  position: absolute;
  bottom: 32px;
  left: ${(props) => (props.isCentered ? "50%" : "20px")};
  transform: ${(props) =>
    props.isCentered ? "translateX(-50%)" : "translateX(0)"};
  background: #dcdadc;
  border: none;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #000;

  &:hover {
    background-color: #eab308;
  }
`;
