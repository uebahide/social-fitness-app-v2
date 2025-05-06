import { useForm } from "react-hook-form";
import { validEmailPattern } from "../../utils/helpers";
import Button from "../../ui/Button";
import styled from "styled-components";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: var(--border-radius-md);
  padding: 3rem 4rem;
  gap: 1rem;
  border: 1px solid var(--color-grey-100);
`;

const FormRowVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
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
        <Label>Your email</Label>
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
    </Form>
  );
}
