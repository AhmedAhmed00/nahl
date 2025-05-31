import styled from "styled-components";
import Heading from "../../ui/Heading";
import { Avatar } from "../../ui/layout/Header";
import Row from "../../ui/Row";
import Tag from "../../ui/Tag";
import InputsHeader from "../../ui/InputsHeader";
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t } = useTranslation();
  return (
    <>
      <Row justify="start" $gap="25px" type="horizontal">
        <Avatar src={"/profile.jpg"} />
        <Row type="vertical">
          <Row $gap="12px" type="horizontal">
            <Heading>Juilia</Heading>
            <Tag type="green">Active</Tag>
          </Row>
          <P>E-commerce</P>
        </Row>
      </Row>

      <Heading as={"h5"} color="primary">
        {t("dataKeys.personalInfo")}
      </Heading>
      <Row type="horizontal" justify="start" $gap="25px">
        <InfoItem icon={<IoPersonOutline />} title={"Ahmed Mohamed"} />
        <InfoItem icon={<IoMailOutline />} title={"Ahmed@info.com"} />
        <InfoItem icon={<MdOutlinePhone />} title={"0123456789"} />
        <InfoItem
          icon={<MdOutlineLocationOn />}
          title={"Al Mehwar Al Markazi ,Giza,Egypt "}
        />
      </Row>

      <Row $gap="20px" type="horizontal">
        <Row gap="4px">
          <Heading as={"h5"} color="primary">
            {t("dataKeys.description")}
          </Heading>
          <article
            style={{
              color: "var(--color-grey-500)",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt utc labore et dolore magna aliqua.Lorem ipsum
            dolor sit amet, consecteturt adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore csd magna aliqua. incididunt ut
            labore et dolore magna aliqua.Lorem ipsumld dolor sit amet,
            consectetur adipiscing elit, sed do eius incididunt ut labo dolore
            magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisci elit,
            sed do eius incididunt ut labore et dolore magna aliqua.Lorem ipsum
            dol sit amet, consectetur adipiscing elit, sed do.
          </article>
        </Row>
        <Row gap="8px">
          <Heading as={"h5"} color="primary">
            {t("dataKeys.location")}
          </Heading>

          <article
            style={{
              color: "var(--color-grey-500)",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt utc labore et dolore magna aliqua.Lorem ipsum
            dolor sit amet, consecteturt adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore csd magna aliqua. incididunt ut
            labore et dolore magna aliqua.Lorem ipsumld dolor sit amet,
            consectetur adipiscing elit, sed do eius incididunt ut labo dolore
            magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisci elit,
            sed do eius incididunt ut labore et dolore magna aliqua.Lorem ipsum
            dol sit amet, consectetur adipiscing elit, sed do.
          </article>
        </Row>
      </Row>
    </>
  );
}

const P = styled.p``;

const StyledIcon = styled.p`
  display: flex;
  font-size: 1.7rem;
`;

function InfoItem({ icon, title }) {
  return (
    <Row
      items="center"
      justify="center"
      width="fit-content"
      type="horizontal"
      $gap="6px"
    >
      <StyledIcon>{icon}</StyledIcon>
      <P>{title}</P>
    </Row>
  );
}
