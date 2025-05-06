import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateExercise as updateExerciseApi } from "../../services/apiExercise";
import toast from "react-hot-toast";

export function useUpdateExercise() {
  const queryClient = useQueryClient();
  const { mutate: updateExercise, isPending: isUpdating } = useMutation({
    mutationFn: updateExerciseApi,
    onSuccess: () => {
      toast.success(`Exercise successfully updated 📝`);
      queryClient.invalidateQueries({ queryKey: ["exercises"] });
    },
    onError: (error) => {
      toast.error("Exercise could not be updated ☹️ " + error.message);
    },
  });

  return { isUpdating, updateExercise };
}
