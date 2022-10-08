import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

const StyledProjectHolder = styled.div`
    width: 100px;
    height: 100px;
    background-color: blue;
`;

const ParallaxProjectHolder = ({start, end}) => {
  return (
    <Parallax translateY={[start, end]}>
        <StyledProjectHolder />
    </Parallax>
  )
}

export default ParallaxProjectHolder
