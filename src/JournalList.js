import React, { Component } from 'react'

export default class JournalList extends Component {

  render() {
    const allItems = this.props.journals.map((item, i) =>
      <div>
        <div key={i}>
          <div>{item.text}</div>
          <div>{item.happiness_level}</div>
        </div>
      </div>  
    );
    return (
      <div>{allItems}</div>
    )
  }
}