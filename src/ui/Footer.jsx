import React from "react";
import styled from "styled-components";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Section = styled.section`
  padding: 2.5rem 1rem;
  width: 100%;
  border-top: 1px solid #e5e7eb;
  color: #f6f6f6;

  @media (min-width: 640px) {
    padding: 2.5rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 92%;
  margin: 0 auto;
`;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 200px;
  }
`;

const LeftColumn = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const Description = styled.p`
  color: #f6f6f6;
  line-height: 1.6;
`;

const SocialWrapper = styled.div`
  margin-top: 1.5rem;
`;

const SocialText = styled.p`
  font-weight: 600;
  color: #f6f6f6;
  margin-bottom: 0.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    transition: color 0.3s ease;

    &:hover {
      color: #3b82f6; /* primary */
    }
  }

  svg {
    width: 2.25rem;
    height: 2.25rem;
  }
`;

const RightColumn = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.875rem;
  color: #f6f6f6;
`;

const MenuItem = styled.li`
  font-weight: 500;
  transition: color 0.3s ease;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #3b82f6; /* primary */
    }
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  object-fit: contain;
`;

const menuItems = [
  {
    links: [
      { text: "Home", url: "#" },
      { text: "Account", url: "#" },
      { text: "Whisshlist", url: "#" },
      { text: "Cart", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "FAQs", url: "#" },
      { text: "Terms of Service", url: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterWrapper>
          <LeftColumn>
            <Logo src="/nahl.png" alt="logo" />
            <Description>
              منصة تعليمية إلكترونية . جميع الحقوق محفوظة © 2025 .
            </Description>
          </LeftColumn>

          <RightColumn>
            <SocialWrapper>
              <SocialText>تابعنا علي منصات السوشيال ميديا:</SocialText>
              <SocialIcons>
                <a href="#" aria-label="Facebook">
                  <Facebook />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter />
                </a>
                <a href="#" aria-label="YouTube">
                  <Youtube />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin />
                </a>
              </SocialIcons>
            </SocialWrapper>
          </RightColumn>
        </FooterWrapper>
      </Container>
    </Section>
  );
};

export default Footer;
