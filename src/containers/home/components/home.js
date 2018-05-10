import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router-dom";

const style = {
  height: '500%',
  marginTop: '10%',
  labelStyle: {
    fontSize: '5em',
  }
};

const Home = () => ( 
  <div className='container'>
    <Link to='/username'>
      <RaisedButton
        label='開始'
        primary={true}
        style={style}
        labelStyle={style.labelStyle}
      />
    </Link>
  </div>
);

export default Home;
