import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  option: {
    display: 'block',
    textAlign: 'left',
    margin: '1%',
  },
  labelStyle: {
    float: 'left',
  },
};

const Question = ({ numberOfQuestion, jpWord, options, chosenAns, handleClick, ans }) => {
  let _options = options.map((option, i) => (option[0]) === chosenAns ?
    <div onClick={e => handleClick(e, numberOfQuestion, option[0])}>
      <RaisedButton
        key={i}
        label={`${i + 1}. ${option[1]}`}
        style={style.option}
        labelStyle={style.labelStyle}
        className='rounded'
        primary={true}
      />
    </div> :
    <div onClick={() => handleClick(numberOfQuestion, option[0])} >
      <RaisedButton
        key={i}
        label={`${i + 1}. ${option[1]}`}
        style={style.option}
        onClick={() => handleClick(numberOfQuestion, option[0])} 
        labelStyle={style.labelStyle}
        className='rounded'
      />
    </div>
  );
  if (ans !== undefined && chosenAns !== ans) {
    console.log(ans);
    for (let i = 0; i < options.length; i += 1) {
      if (options[i][0] === ans) {
        _options[i] =
        (<RaisedButton
          key={i}
          label={`${i + 1}. ${options[i][1]}`}
          style={style.option}
          onClick={() => handleClick(numberOfQuestion, options[i][0])}
          labelStyle={style.labelStyle}
          className='rounded'
          secondary={true}
        />);
      }
    }
  }
  return (
    <div className='container'>
      <div className='container text-left'>
        <p className='d-inline-block'>{`${numberOfQuestion}. ${jpWord}`}</p>
        <p className='d-inline-block float-right'>{`${numberOfQuestion}/10`}</p>
      </div>
      <div className='container text-left'>
        <div>{_options}</div>
      </div>
    </div>
  );
};

Question.propTypes = {
  numberOfQuestion: PropTypes.number.isRequired,
  jpWord: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(Array).isRequired,
  chosenAns: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  ans: PropTypes.number.isRequired,
};

export default Question;
