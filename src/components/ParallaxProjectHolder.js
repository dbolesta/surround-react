import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

const StyledProjectHolder = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.bg || 'red'};
`;


const StyledPHolder = styled.div`
    position: absolute;
    inset: ${props => props.inset};
`;

const ParallaxProjectHolder = ({start, end, inset, bg}) => {
  return (
    <StyledPHolder inset={inset}>
        <Parallax translateY={[start, end]}>
            <StyledProjectHolder bg={bg} />
        </Parallax>
    </StyledPHolder>
  )
}

export default ParallaxProjectHolder
