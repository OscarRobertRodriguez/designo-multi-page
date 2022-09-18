/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { QUERIES } from "../constants";
import { useState } from "react";
import Button from "./button";
import { useForm, isRequired, isValidEmail, isValidPhone } from "../hooks";

const errorSvg = "assets/contact/desktop/icon-error.svg";

const MarginWrapper = styled.div`
  position: relative;
  margin: 0 -24px;
  padding: 0 24px;
  padding-bottom: 50px;

  @media ${QUERIES.tabletAndUp} {
    margin: 0 16px;
    padding: 0 24px;
  }

  @media ${QUERIES.desktopAndUp} {
    padding-bottom: 40px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 48px;
  grid-template-rows: min-content min-content;
  background-color: var(--peach);
  width: 100%;
  height: 764px;
  margin: 0 -24px;
  padding: 0 24px;
  position: absolute;
  padding-top: 72px;
  padding-bottom: 72px;

  @media ${QUERIES.tabletAndUp} {
    border-radius: 15px;
    height: 711px;
    padding: 71px 58px;
    grid-row-gap: 40px;
  }

  @media ${QUERIES.desktopAndUp} {
    height: 480px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: initial;
    padding: 55px 95px;
    grid-column-gap: 95px;

    

  }
`;

const TextWrapper = styled.div`
  text-align: center;
  color: var(--white);
  display: grid;
  grid-row-gap: 24px;

  @media ${QUERIES.tabletAndUp} {
    text-align: left;
    height: 158px;
    grid-row-gap: 32px;

  }

  @media ${QUERIES.desktopAndUp} {
    width: 445px;
    align-self: center;
    margin-bottom: 50px;
  }


  h2 {
    font-size: var(--32px);
    font-weight: var(--med);

    @media ${QUERIES.tabletAndUp} {
      font-size: var(--48px);
    }
  }

  p {
    font-size: var(--15px);

    @media ${QUERIES.tabletAndUp} {
      font-size: var(--16px);
      max-width: 573px;
    }
  }
`;

const Form = styled.form`
  display: grid;
  grid-row-gap: 25px;
  justify-items: center;
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    justify-items: end;
    height: 291px;
  }
`;

const Label = styled("label")`
  width: 100%;
  position: relative;
  display: block;
  padding: 0;
  margin: 0;

  &.labelMessage {
    height: 109px;

    @media ${QUERIES.tabletAndUp} {
    height: 102px;
  }

  }

  span {
    position: absolute;
    right: 8px;
    font-size: var(--12px);
    display: flex;
    align-content: center;
    align-items: center;
    color: var(--white);
  }

  img {
    display: inline-block;
    padding-left: 8px;
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  color: var(--white);
  outline: none;
  border-bottom: 1px solid var(--white);
  width: 100%;
  padding-left: 16px;
  padding-bottom: 11px;
  font-size: var(--15px);
  transition: 0.5s;


  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    color: var(--white);
    background: transparent !important;
    background-color: transparent !important;
    -webkit-text-fill-color: var(--white);
    transition: background-color 5000s ease-in-out 0s;
  }

  &.textarea {
    resize: none;
    height: 100%;
  }

  :hover {
    cursor: pointer;
    border-bottom: 3px solid var(--white);
  }

  ::placeholder {
    color: var(--white);
    opacity: 0.5;
    text-transform: capitalize;
    font-size: inherit;
  }
`;

const SubmitButton = styled.input`
  background-color: var(--white);
  border-radius: 5px;
  width: 152px;
  height: 56px;
  display: block;
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: 0.5s;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: var(--15px);
  color: var(--black);
  text-decoration: none;
  margin-top: 15px;

  :hover {
    background-color: var(--light-peach);
    color: var(--white);
  }
`;

const ContactCard = () => {
  const initialState = {
    name: "",
    email: "",
    validEmail: "",
    message: "",
    validPhone: "",
  };
  const validations = [
    ({ name }) => isRequired(name) || { name: "Can't be empty" },
    ({ email }) => isRequired(email) || { email: "Can't be empty" },
    ({ email }) =>
      isValidEmail(email) || {
        validEmail: "Please use a valid email address",
      },
    ({ validPhone }) =>
      isValidPhone(validPhone) || {
        validPhone: "Please use a valid phone number",
      },
    ({ message }) => isRequired(message) || { message: "Can't be empty" },
  ];

  const { values, isValid, errors, changeHandler, submitHandler, touched } =
    useForm(initialState, validations);

  return (
    <MarginWrapper>
      <Wrapper>
        <TextWrapper>
          <h2>Contact Us</h2>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </TextWrapper>

        <Form onSubmit={submitHandler}>
          <Label htmlFor="contact-name">
            {touched.name && errors.name && (
              <span className="error">
                {errors.name} <img src={errorSvg} alt="svg" />
              </span>
            )}
            <Input
              placeholder="name"
              value={values.name}
              onChange={changeHandler}
              type={"text"}
              name="name"
              id="contact-name"
            />
          </Label>
          <Label htmlFor="contact-email">
            {touched.email && errors.email && (
              <span className="error">
                {errors.email} <img src={errorSvg} alt="svg" />
              </span>
            )}

            {touched.email && errors.validEmail && (
              <span className="error">
                {errors.validEmail} <img src={errorSvg} alt="svg" />
              </span>
            )}
            <Input
              placeholder="email address"
              value={values.email}
              onChange={changeHandler}
              id="contact-email"
              name="email"
            />
          </Label>
          <Label htmlFor="contact-phone">
            {touched.validPhone && errors.validPhone && (
              <span className="error">
                {errors.validPhone} <img src={errorSvg} alt="svg" />
              </span>
            )}
            <Input
              placeholder="phone"
              value={values.validPhone}
              onChange={changeHandler}
              id="contact-phone"
              name="validPhone"
            />
          </Label>

          <Label htmlFor="message" className="labelMessage">
            {touched.message && errors.message && (
              <span className="error">
                {errors.message} <img src={errorSvg} alt="svg" />{" "}
              </span>
            )}
            <Input
              as="textarea"
              placeholder="your message"
              value={values.message}
              onChange={changeHandler}
              type={"text"}
              className="textarea"
              name="message"
              id="message"
            />
          </Label>
          <Button as="button" type="submit" disabled={!isValid}>
            Submit
          </Button>
        </Form>
      </Wrapper>
    </MarginWrapper>
  );
};

export default ContactCard;
