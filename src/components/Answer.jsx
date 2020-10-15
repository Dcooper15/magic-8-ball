import React from 'react';
import styled from "styled-components";


const EightBallAnswer = styled.p`
  font-size: 2rem;
  font-wight: bold;
  text-align: center;
  
  
  .introText {
      color: purple;
  }

  .answerText {
      color: purple;
  }
`;

const Answer = props => {
    return (
        <EightBallAnswer>
            <span className="introText">Magic 8 Ball Says;</span> <span className="answerText">{props.answer}</span>
        </EightBallAnswer>
    )
}

export default Answer;