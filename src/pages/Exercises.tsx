import AddExercise from "../features/exercises/AddExercise";
import ExerciseTable from "../features/exercises/ExerciseTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Exercises() {
  return (
    <>
      <Row>
        <Heading as="h1">Exercises</Heading>
      </Row>
      <Row type="vertical">
        <ExerciseTable />
        <AddExercise />
      </Row>
    </>
  );
}
