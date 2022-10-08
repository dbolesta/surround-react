import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';

const StyledPage = styled.div`
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;


const Page = ({start, end}) => {
  return (
    <StyledPage>
        {/* <Parallax translateY={['-100px', '200px']}> */}
        <Parallax translateY={[start, end]} >
        {/* <Parallax speed={-15}> */}
            <div className="my-thing" />
        </Parallax>
    </StyledPage>
  )
}

export default Page