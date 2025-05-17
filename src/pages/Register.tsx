import styled from "styled-components";
import RegisterForm from "../features/authentication/RegisterForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const RegisterLayout = styled.div`
  display: grid;
  grid-template-columns: 46rem;
  justify-content: center;
  align-content: center;

  height: 100vh;
  gap: 3rem;
  background-color: var(--color-grey-50);
`;

export default function Register() {
  return (
    <RegisterLayout>
      <Logo />
      <Heading as="h4">Create new account</Heading>
      <RegisterForm />
    </RegisterLayout>
  );
}
