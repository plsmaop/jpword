import { connect } from 'react-redux';
import Range from './components/range';
import { actions } from '../../redux/questionModule';

const mapStateToProps = state => ({
  name: state.userName.name,
  selectedChapter: state.question.selectedChapter,
});
const { selectChapter, unselectChapter, generateQuestions } = actions;

export default connect(mapStateToProps, { selectChapter, unselectChapter, generateQuestions })(Range);
