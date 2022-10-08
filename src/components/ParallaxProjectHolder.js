import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

const StyledProjectHolder = styled.div`
    width: ${props => props.size || '100px'};
    height: ${props => props.size || '100px'};
    background-color: ${props => props.bg || 'red'};
`;


const StyledPHolder = styled.div`
    position: absolute;
    inset: ${props => props.inset};
`;

const ParallaxProjectHolder = ({start, end, inset, bg, size}) => {
  return (
    <StyledPHolder inset={inset}>
        <Parallax translateY={[start, end]}>
            <StyledProjectHolder bg={bg} size={size}/>
        </Parallax>
    </StyledPHolder>
  )
}

export default ParallaxProjectHolder
