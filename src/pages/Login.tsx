import LoginForm from "../features/authentication/LoginForm";
import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.div`
  display: grid;
  grid-template-columns: 46rem;
  justify-content: center;
  align-content: center;

  height: 100vh;
  gap: 3rem;
  background-color: var(--color-grey-50);
`;

export default function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}
