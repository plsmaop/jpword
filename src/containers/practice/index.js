import { connect } from 'react-redux';
import Practice from './components/practice';
import { actions } from '../../redux/questionModule';

const mapStateToProps = state => ({
  currentQuestion: state.question.currentQuestion,
  chosenAns: state.question.chosenAns,
  jpWords: state.question.jpWords,
  ans: state.question.ans,
  options: state.question.options,
});
const { nextQuestion, chooseAns, addQuestions, getScore } = actions;

export default connect(mapStateToProps, { nextQuestion, chooseAns, addQuestions, getScore })(Practice);
