import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router-dom";

const style = {
  chapter: {
   margin: '1%',
  },
  submit: {
    height: '1000%',
    marginTop: '5%',
  },
  font: {
    fontSize: '3em',
  },
}

class Range extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const { tagName } = e.target;
    let chapter = 0;
    if (tagName === 'SPAN') chapter = Number(e.target.innerHTML);
    else chapter = Number(e.target.children[0].innerHTML);
    const { selectChapter, unselectChapter, selectedChapter } = this.props;
    if (selectedChapter.includes(Number(chapter))) unselectChapter(Number(chapter));
    else selectChapter(Number(chapter));
  }
  render() {
    const buttons = [];
    const { handleClick } = this;
    const { selectedChapter, generateQuestions } = this.props;
    for (let i = 1; i <= 20; i += 1) {
      if (selectedChapter.includes(i)) 
        buttons.push((
          <span>
            <RaisedButton key={i} label={i} primary={true} style={style.chapter} onClick={e => handleClick(e)} />
          </span>
        ));
      else buttons.push((
        <span>
          <RaisedButton key={i} label={i} style={style.chapter} onClick={e => handleClick(e)}/>
        </span>
      ));
    }
    return (
      <div className='container'> 
        <div className='col-12'>
          <div>
            <p className='text-left'>{`${this.props.name} 你好，請選擇你要練習的章節：`}</p>
          </div>
          <div className='text-left'>
            {buttons}
          </div>
          <div className='mt-10'>
            <Link to='/practice'>
              <RaisedButton
               label='決定好了'
               primary={true}
               style={style.submit}
               labelStyle={style.font}
               onClick={generateQuestions}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Range.propTypes = {
  name: PropTypes.string.isRequired,
  selectedChapter: PropTypes.arrayOf(Number).isRequired,
  selectChapter: PropTypes.func.isRequired,
  unselectChapter: PropTypes.func.isRequired,
  generateQuestions: PropTypes.func.isRequired,
};

export default Range;
