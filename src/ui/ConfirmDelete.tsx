import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

const StyledConfirmDelete = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: var(--border-radius-md);
`;

const P = styled.p`
  margin-top: 1rem;
  color: var(--color-grey-400);
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: end;
`;

export default function ConfirmDelete({
  resource,
  onCloseModal,
  onDelete,
}: {
  resource: string;
  onCloseModal?: () => void;
  onDelete?: () => void;
}) {
  return (
    <StyledConfirmDelete>
      <Heading as="h2">Delete {resource}</Heading>
      <P>Are you sure you want to delete this cabin permanently?</P>
      <P> This action cannot be undone.</P>
      <Buttons>
        <Button variation="secondary" size="medium" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation="danger" size="medium" onClick={onDelete}>
          Delete
        </Button>
      </Buttons>
    </StyledConfirmDelete>
  );
}
