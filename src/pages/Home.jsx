import { useTranslation } from "react-i18next";
import { Container } from "../ui/Container";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import styled from "styled-components";
import { Profile } from "../ui/AuthContainer";
import { BsPerson } from "react-icons/bs";
import { StyledTopHeader } from "../ui/TopHeader";
import { Article } from "../ui/Article";
import NavigateCard from "../ui/NavigateCard";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <StyledTopHeader>
        <Profile>
          <BsPerson
            style={{
              display: "block",
              color: "#d4dbdb",
            }}
            size={70}
          />
        </Profile>
        <div>
          <Heading color="light" as={"h1"}>
            منصة نهل أكاديمي
          </Heading>
        </div>
        <div /> {/* Empty right column to balance the layout */}
      </StyledTopHeader>

      <Row $padding="60px 50px">
        <Heading as={"h2"} color="light">
          منصة نهل أكاديمي
        </Heading>
        <Article>
          هي منصة إلكترونية للطلاب في ليبي, تساعدك علي الاستعداد لإجتياز
          امتحانات الشهادة الإعدادية أو الثانوية (للتعليم المنزلي) من خلال دورات
          منظمة وشحر مبسط ومتابعة مستمرة, لتنجح وتحصل علي شهادتك بثقة, إن شاء
          الله
        </Article>
      </Row>
      <Row type="horizontal" justify="center" $gap="130px">
        <NavigateCard title={"الشهاد العدادي"} to={"/grade/prep"} />
        <NavigateCard to={"/grade/secondary"} title={"الشهاد الثانوي"} />
      </Row>
    </Container>
  );
}
