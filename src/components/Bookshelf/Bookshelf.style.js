import styled from 'styled-components';

export const ShelfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const FlexRow = styled.div`
  display: flex;
  margin-left: 2rem;
  flex-wrap: nowrap;
  gap: 2rem;
`;

export const BookWrapper = styled.div`
  flex: 0 0 160px;
  max-width: 160px;
`;

export const Divider = styled.div`
  height: 8px;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 8px;
  align-self: center;
  margin: 2rem 0 0;
  width: 100%;
`;
