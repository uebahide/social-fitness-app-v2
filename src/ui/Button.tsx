import styled, { css } from "styled-components";

const sizes = {
  small: css``,
  medium: css`
    padding: 1rem 2rem;
    font-weight: 500;
  `,
};
const variations = {
  primary: css`
    background-color: var(--color-brand-400);
    color: var(--color-grey-50);
    &:hover {
      background-color: var(--color-brand-500);
    }
  `,
  secondary: css`
    background-color: var(--color-grey-50);
    border: 1px solid var(--color-grey-300);
    color: var(--color-grey-500);
    &:hover {
      background-color: var(--color-grey-100);
    }
  `,
  danger: css`
    background-color: var(--color-red-700);
    color: var(--color-grey-50);
    &:hover {
      background-color: var(--color-brand-800);
    }
  `,
};
type Size = keyof typeof sizes;
type Variation = keyof typeof variations;

const Button = styled.button<{ size: Size; variation: Variation }>`
  border: none;
  border-radius: var(--border-radius-md);

  ${({ size }) => sizes[size]}
  ${({ variation }) => variations[variation]}
`;

export default Button;
