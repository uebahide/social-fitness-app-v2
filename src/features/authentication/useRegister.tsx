import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register as registerApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useRegister() {
  const queryClient = useQueryClient();
  const { isPending: isRegistering, mutate: register } = useMutation({
    mutationFn: registerApi,
    onSuccess: (data) => {
      toast.success(
        "Registration successful🎉 Please check your email inbox for a confirmation message.",
      );
      queryClient.setQueryData(["user"], data.user);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isRegistering, register };
}
