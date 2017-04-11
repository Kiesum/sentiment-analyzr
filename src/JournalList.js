import React, { Component } from 'react'

export default class JournalList extends Component {

  getSentimentScore(text, happiness_level) {
    var text = text.replace(/(^\s*)|(\s*$)/gi,"");
    text = text.replace(/[ ]{2,}/gi," ");
    text = text.replace(/\n /,"\n");
    text = text.split(' ').length;
    var sentimentScore = text * happiness_level;
    return sentimentScore
  }

  render() {
    const allItems = this.props.journals.map((item, i) =>
      <li className="list-item" key={i}>
        <div>{item.text}</div>
        <div>{this.getSentimentScore(item.text, item.happiness_level)}</div>
      </li>  
    );
    return (
      <ul className="journal-list">{allItems}</ul>
    )
  }
}