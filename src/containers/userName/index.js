import { connect } from 'react-redux';
import UserName from './components/userName';
import { actions } from '../../redux/userNameModule';

const mapStateToProps = (state, ownProps) => ({ 
  name: state.userName.name,
  redirect: state.userName.redirect,
});
const { handleUpdateInput, addUser } = actions;
/* const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: name => dispatch(actions.handleChange(name))
  }
}*/

export default connect(mapStateToProps, { handleUpdateInput, addUser })(UserName);
