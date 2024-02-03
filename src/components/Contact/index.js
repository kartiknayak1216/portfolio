import React from "react";
import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
`;

const Icon = styled.div`
  margin-right: 10px;
  color: ${({ theme }) => theme.primary};
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <ContactInfo>
          <ContactItem>
            <Icon>
              <EmailIcon />
            </Icon>
            kartiknayak1216@gmail.com
          </ContactItem>
          <ContactItem>
            <Icon>
              <PhoneIcon />
            </Icon>
            9769412945
          </ContactItem>
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};

export default Contact;
