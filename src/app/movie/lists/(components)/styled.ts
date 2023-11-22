import styled from "styled-components";

export const MovieListContainer = styled.section<{ $windowWidth: number }>`
  display: grid;
  gap: 20px;
  padding: 20px;
  grid-template-columns: repeat(${(props) => props.$windowWidth}, 1fr);
`;
