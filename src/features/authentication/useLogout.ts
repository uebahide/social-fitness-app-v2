import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending: isLoggingout, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["user"] });
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isLoggingout, logout };
}
