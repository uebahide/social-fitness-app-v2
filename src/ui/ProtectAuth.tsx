import { ReactNode, useEffect } from "react";
import { useGetUser } from "../features/authentication/useGetUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectAuth({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useGetUser();
  useEffect(
    function () {
      if (!isLoading && isAuthenticated) {
        navigate("/");
      }
    },
    [isAuthenticated, isLoading, navigate],
  );
  if (isLoading || isAuthenticated)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  return children;
}
