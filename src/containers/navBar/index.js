import { connect } from 'react-redux';
import NavBar from './components/navBar';
import { actions } from '../../redux'

const { initState } = actions;

export default connect(null, { initState })(NavBar);
