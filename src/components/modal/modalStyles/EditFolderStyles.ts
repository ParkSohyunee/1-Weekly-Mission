import styled from "styled-components";

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.125rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-gray-20);
  outline-style: none;
  font-size: 1rem;

  &:focus {
    border: 1px solid var(--color-primary);
  }
`;
