import styled from 'styled-components';

const StyledPage = styled.div`
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;


const Page = () => {
  return (
    <StyledPage>Page</StyledPage>
  )
}

export default Page