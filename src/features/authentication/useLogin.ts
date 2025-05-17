import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isPending: isLoggingin, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      const name = data.user.user_metadata.name;
      navigate("/", { replace: true });
      toast.success(`Welcome back ${name}🎉🏃‍➡️`);
      queryClient.setQueryData(["user"], data.user);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isLoggingin, login };
}
