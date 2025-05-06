import { format } from "date-fns";
import { Exercise } from "./types/Exercise";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useDeleteExercise } from "./useDeleteExercise";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import ExerciseUpdateForm from "./ExerciseForm";
import { useCreateExercise } from "./useCreateExercise";

type RowProps = {
  exercise: Exercise;
};

export default function ExerciseRow({ exercise }: RowProps) {
  const { deleteExercise } = useDeleteExercise();
  function handleDeleteExercise(id: number) {
    deleteExercise(id);
  }
  const { isCreating: isDuplicating, createExercise } = useCreateExercise();
  const { id, created_at, ...dataForDuplicate } = exercise;

  function handleDuplicate() {
    createExercise(dataForDuplicate);
  }
  return (
    <Table.Row>
      <div>{format(new Date(exercise.created_at), "MMM dd")}</div>
      <div>{exercise.category}</div>
      <div>{exercise.duration} min</div>
      <div>{exercise.distance ? exercise.distance + " km" : "-"}</div>
      <div>{exercise.reps ? exercise.reps + " reps" : "-"} </div>
      <div>{exercise.sets ? exercise.sets + " sets" : "-"} </div>
      <div>{exercise.weight ? exercise.weight + " kg" : "-"}</div>
      <div>{exercise.notes}</div>
      <Modal>
        <Menus.Toggle id={exercise.id.toString()} />
        <Menus.List id={exercise.id.toString()}>
          <Modal.Open name="edit">
            <Menus.Button icon={<HiPencil />} disabled={isDuplicating}>
              Edit
            </Menus.Button>
          </Modal.Open>
          <Menus.Button
            onClick={handleDuplicate}
            icon={<HiSquare2Stack />}
            disabled={isDuplicating}
          >
            Duplicate
          </Menus.Button>
          <Modal.Open name="confirm-delete">
            <Menus.Button icon={<HiTrash />} disabled={isDuplicating}>
              Delete
            </Menus.Button>
          </Modal.Open>
        </Menus.List>

        <Modal.Window name="edit">
          <ExerciseUpdateForm exercise={exercise} />
        </Modal.Window>
        <Modal.Window name="confirm-delete">
          <ConfirmDelete
            resource="exercise"
            onDelete={() => handleDeleteExercise(exercise.id)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}
