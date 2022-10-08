import styled from 'styled-components';

const AboutTextContainer = styled.div`
    margin: 5rem;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 2vw;
    color: #e5e5e5;
    max-width: 1200px;
    text-align: center;
`;


const About = () => {
  return (
    <AboutTextContainer>
        <p>Our in-house post production and visual effects facility is used to push the boundaries of creativity through conceptual thinking and inventive techniques. It's in our post process where we use technology and talent to raise questions, design solutions and shape the answers that manifest our initial ideas.</p>
    </AboutTextContainer>
  )
}

export default About