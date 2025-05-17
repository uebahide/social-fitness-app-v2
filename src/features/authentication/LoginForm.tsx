import { useForm } from "react-hook-form";
import { validEmailPattern } from "../../utils/helpers";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  color: var(--color-grey-500);
  text-align: center;
  margin-top: 1.4rem;
  text-decoration: underline;
`;

type FormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const { isLoggingin, login } = useLogin();

  function onSubmit(data: FormValues) {
    login(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical>
        <Label>Email address</Label>
        <Input
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: validEmailPattern,
              message: "Please enter a valid email",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Label>Password</Label>
        <Input type="password" {...register("password", { required: "This field is required" })} />
      </FormRowVertical>
      <FormRowVertical>
        <Button variation="primary" size="medium" disabled={isLoggingin}>
          {isLoggingin ? <SpinnerMini /> : "Log in"}
        </Button>
      </FormRowVertical>
      <StyledNavLink to="/register">You don't have your account yet?</StyledNavLink>
    </Form>
  );
}
