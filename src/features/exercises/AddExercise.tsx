import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ExerciseForm from "./ExerciseForm";

export default function AddExercise() {
  return (
    <div>
      <Modal>
        <Modal.Open name="form">
          <Button size="medium" variation="primary">
            Add New Exercise
          </Button>
        </Modal.Open>
        <Modal.Window name="form">
          <ExerciseForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
