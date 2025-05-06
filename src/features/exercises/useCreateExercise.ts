import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createExercise as createExerciseApi } from "../../services/apiExercise";
import { Exercise } from "./types/Exercise";
import toast from "react-hot-toast";

export function useCreateExercise() {
  const queryClient = useQueryClient();
  const { mutate: createExercise, isPending: isCreating } = useMutation({
    mutationFn: (newExercise: Exercise) => createExerciseApi(newExercise),
    onSuccess: () => {
      toast.success("New exercise successfully created 🎉");
      queryClient.invalidateQueries({ queryKey: ["exercises"] });
    },
    onError: (error) => {
      toast.error("Exercise could not be created ☹️ " + error.message);
    },
  });

  return { isCreating, createExercise };
}
