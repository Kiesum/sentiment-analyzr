import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

function getSentimentScore(text, happiness_level) {
    var text = text.replace(/(^\s*)|(\s*$)/gi,"");
    text = text.replace(/[ ]{2,}/gi," ");
    text = text.replace(/\n /,"\n");
    text = text.split(' ').length;
    var sentimentScore = text * happiness_level;
    return sentimentScore
  }

function compare(a,b) {
  if (getSentimentScore(a.text, a.happiness_level) > getSentimentScore(b.text, b.happiness_level))
    return -1;
  if (getSentimentScore(a.text, a.happiness_level) < getSentimentScore(b.text, b.happiness_level))
    return 1;
  return 0;
}

export default class JournalList extends Component {

  render() {
    const allUnsortedItems = this.props.journals.sort(compare);
    const allItems = allUnsortedItems.map((item, i) =>
      <Row key={i}>
        <Col xs={12} md={6} mdOffset={3}>
          <li className="list-item">
            <p>{item.text}</p>
            <span>Sentiment scrore: {getSentimentScore(item.text, item.happiness_level)}</span>
          </li> 
        </Col>
      </Row> 
    );
    return (
      <ul className="journal-list">{allItems}</ul>
    )
  }
}