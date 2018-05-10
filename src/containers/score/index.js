import { connect } from 'react-redux';
import Score from './components/score';
import actions from '../../redux/questionModule';

const mapStateToProps = state => ({
  score: state.question.score,
  jpWords: state.question.jpWords,
  options: state.question.options,
  ans: state.question.ans,
  chosenAns: state.question.chosenAns,
});

export default connect(mapStateToProps, null)(Score);
