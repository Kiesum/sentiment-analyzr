import React from 'react';
import { connect } from 'react-redux';
import { addJournal } from './actions';
import { Row, Col, Button } from 'react-bootstrap';


function errorMessage(err) {
  console.log('hello')
  // error = err;
}

let AddJournal = ({ dispatch }) => {
  let text;
  let happiness_level;

  return (
      <form onSubmit={e => {
        e.preventDefault()
        if (!text.value.trim() || !happiness_level.value) {
          if (!text.value.trim()) {
            errorMessage('Please add some text');
          }
          if (!happiness_level.value) {
            errorMessage('Please add a happiness rating');
          }
          return
        }
        dispatch(addJournal(text.value, happiness_level.value))
        text.value = '';
        happiness_level.value = '';
      }}>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          <textarea className="text-input" rows="5" placeholder="What are you thinking about?" ref={node => {
            text = node
          }} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          <label><span className="label-text">How happy are you? (on a scale from -10 to 10)</span>
          <input className="number-input" type="number" min="-10" max="10" ref={node => {
            happiness_level = node
          }} />
          </label>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} mdOffset={3} >
          <Button className="add-journal-btn" type="submit">
            Add Journal
          </Button>
        </Col>
      </Row>
      </form>
  )
}
AddJournal = connect()(AddJournal)

export default AddJournal