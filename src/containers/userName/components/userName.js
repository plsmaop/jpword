import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import TextField from 'material-ui/TextField';

const style = {
  width: '50%',
  height: '200%',
  marginTop: '10%',
  inputStyle: {
    fontSize: '1.5em',
    paddingTop: '7%',
    paddingBottom: '2%',
  },
  floatingLabelStyle: {
    fontSize: '1.5em',
  },
};

class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleChange(e) { this.props.handleUpdateInput(e.target.value); }
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      if (!this.props.name.trim()) return;
      else this.props.addUser();
    }
  }
  render() {
    if (this.props.redirect && this.props.name !== '') {
      console.log(this.props.name);
      return <Redirect push to="/range" />;
    }
    return (
      <div>
        <TextField
          floatingLabelText="輸入你的名字"
          onChange={e => this.handleChange(e)}
          onKeyPress={e => this.handleKeyPress(e)}
          value={this.props.name}
          style={style}
          floatingLabelStyle={style.floatingLabelStyle}
          inputStyle={style.inputStyle}
        />
      </div>
    );
  }
}

UserName.propTypes = {
  name: PropTypes.string.isRequired,
  redirect: PropTypes.bool.isRequired,
  handleUpdateInput: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
};

export default UserName;
