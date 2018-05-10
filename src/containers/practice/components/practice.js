import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Question from '../../../components/question';

const style = {
  textAlign: 'center',
  padding: '2%',
  submit: {
    height: '1000%',
    margin: '5%',
  },
  font: {
    fontSize: '3em',
  },
};

class Practice extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const questions = [];
    const { currentQuestion, nextQuestion, getScore, chosenAns,
      addQuestions, jpWords, options, chooseAns } = this.props;
    for (let i = 1; i <= 10; i += 1) {
      questions.push((
        <Question
          numberOfQuestion={i}
          jpWord={jpWords[i - 1]}
          options={options[i - 1]}
          handleClick={chooseAns}
          chosenAns={chosenAns[i]}
        />
      ));
    }
    addQuestions(questions);
    const submit = currentQuestion < 9 ?
      (<RaisedButton
        label='提交'
        primary={true}
        style={style.submit}
        labelStyle={style.font}
        onClick={nextQuestion}
      />) :
      (<Link to='/score'><RaisedButton
        label='完成'
        primary={true}
        style={style.submit}
        labelStyle={style.font}
        onClick={getScore}
      /></Link>);
    return (
      <div className="container col-md-5">
        <div>{questions[currentQuestion]}</div>
        <div>{submit}</div>
      </div>
    );
  }
}

Practice.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  getScore: PropTypes.func.isRequired,
  jpWords: PropTypes.arrayOf(String).isRequired,
  options: PropTypes.arrayOf(Array).isRequired,
  addQuestions: PropTypes.func.isRequired,
  chooseAns: PropTypes.func.isRequired,
  chosenAns: PropTypes.arrayOf(Number).isRequired,
};

export default Practice;
