import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

export function useGetUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const isAuthenticated = user?.role;

  return { isLoading, user, isAuthenticated };
}
