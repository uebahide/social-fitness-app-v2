import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteExercise as deleteExerciseApi } from "../../services/apiExercise";
import toast from "react-hot-toast";

export function useDeleteExercise() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteExercise } = useMutation({
    mutationKey: ["exercises"],
    mutationFn: deleteExerciseApi,
    onSuccess: () => {
      toast.success(`Exercise successfully deleted 🗑️`);
      queryClient.invalidateQueries({
        queryKey: ["exercises"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isDeleting, deleteExercise };
}
