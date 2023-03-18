import styled from "styled-components";

export const CastList = styled.ul`
  --items: 6;
  --gap: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  padding: 0 20px;
  list-style: none;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - var(--gap) * (var(--items) - 1)) / var(--items));
`;

export const CastImage = styled.img`
  width: 200px; 
`;
