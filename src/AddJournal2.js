import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addJournal } from './actions'

class AddJournal2 extends Component {

  handleSubmit() {
    if (!text.value.trim()) {
        return
      }
      dispatch(addJournal(this.text.value, this.happiness_level.value))
      this.text.value = '';
      this.happiness_level.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit().bind(this)}>
          // <textarea ref={(text) => this.text = text} />
          <input type="number" min="-10" max="10" ref={(happiness_level) => this.happiness_level = happiness_level} />
          <button type="submit">
            Add Journal
          </button>
        </form>
      </div>
    )
  }
}

AddJournal2 = connect()(AddJournal2)


export default connect()(AddJournal2)