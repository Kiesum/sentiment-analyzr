import React from 'react'
import { connect } from 'react-redux'
import { addJournal } from './actions'

let AddJournal = ({ dispatch }) => {
  let text;
  let happiness_level;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!text.value.trim()) {
          return
        }
        dispatch(addJournal(text.value, happiness_level.value))
        text.value = '';
        happiness_level.value = '';
      }}>
        <input ref={node => {
          text = node
        }} />
        <input type="number" min="-10" max="10" ref={node => {
          happiness_level = node
        }} />
        <button type="submit">
          Add Journal
        </button>
      </form>
    </div>
  )
}
AddJournal = connect()(AddJournal)

export default AddJournal