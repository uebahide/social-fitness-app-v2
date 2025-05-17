import { useForm } from "react-hook-form";
import { validEmailPattern } from "../../utils/helpers";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import SpinnerMini from "../../ui/SpinnerMini";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Error from "../../ui/Error";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useRegister } from "./useRegister";

type FormValues = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const StyledNavLink = styled(NavLink)`
  color: var(--color-grey-500);
  text-align: center;
  margin-top: 1.4rem;
  text-decoration: underline;
`;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>();
  const { isRegistering, register: registerAccount } = useRegister();

  function onSubmit(data: FormValues) {
    registerAccount(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical>
        <Label>User name</Label>
        <Input
          {...register("name", {
            required: "This field is required",
          })}
        />
        {errors?.name && <Error>{errors.name.message}</Error>}
      </FormRowVertical>
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
        {errors?.email && <Error>{errors.email.message}</Error>}
      </FormRowVertical>
      <FormRowVertical>
        <Label>Password</Label>
        <Input type="password" {...register("password", { required: "This field is required" })} />
        {errors?.password && <Error>{errors.password.message}</Error>}
      </FormRowVertical>
      <FormRowVertical>
        <Label>Confirm password</Label>
        <Input
          type="password"
          {...register("password_confirm", {
            validate: () => {
              if (getValues("password") !== getValues("password_confirm"))
                return "Please enter correct password";
            },
          })}
        />
        {errors?.password_confirm && <Error>{errors.password_confirm.message}</Error>}
      </FormRowVertical>
      <FormRowVertical>
        <Button variation="primary" size="medium" disabled={isRegistering}>
          {isRegistering ? <SpinnerMini /> : "Register"}
        </Button>
      </FormRowVertical>
      <StyledNavLink to="/login">Log in</StyledNavLink>
    </Form>
  );
}
