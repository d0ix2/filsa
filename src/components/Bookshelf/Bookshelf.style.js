import styled from 'styled-components';

export const ShelfContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2rem;
  padding: 2rem;
  justify-items: center;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1199px) and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 799px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
