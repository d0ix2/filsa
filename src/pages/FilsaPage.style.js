import styled from 'styled-components';

export const FilsaItem = styled.div`
 height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
`;

export const Paragragh = styled.span`
  height: 30vh;
  whiteSpace: 'pre-line'
`;

export const Info = styled.span`
  whiteSpace: 'pre-line'
  font-weight: 800;
`;

export const ParagraphWrapper = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const LoadAnotherButton = styled.button`
  width: 30vh;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: #f0f0f0;
  }
`
