import React from 'react';
import PropTypes from 'prop-types';
import Question from '../../../components/question';

import '../../../styles/style.css';

const Score = ({ score, jpWords, options, chosenAns, ans }) => (
  <div>
    <div className="container margin-top-bar">
      <h1>{`Your Score: ${score}/100`}</h1>
    </div>
    <div className="container col-md-5 margin-top-bar">
      {
        jpWords.map((jpWord, i) =>
        (<div className="margin-item">
          <Question
            numberOfQuestion={i + 1}
            jpWord={jpWord}
            options={options[i]}
            chosenAns={chosenAns[i + 1]}
            handleClick={() => {}}
            ans={ans[i]}
          />
        </div>))
      }
    </div>
  </div>
);

Score.propTypes = {
  score: PropTypes.number.isRequired,
  jpWords: PropTypes.arrayOf(String).isRequired,
  ans: PropTypes.arrayOf(Number).isRequired,
  chosenAns: PropTypes.arrayOf(Number).isRequired,
  options: PropTypes.arrayOf(Array).isRequired,
};

export default Score;
