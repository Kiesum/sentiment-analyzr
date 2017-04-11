import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import JournalList from './JournalList';
import { getJournals } from './actions/index.js';
import { connect } from 'react-redux';
import AddJournal from './AddJournal';

class App extends Component {

  componentDidMount() {
    this.props.getJournals();
    console.log(this.props.journals)
  }

  render() {
    return (
      <div>
        <h4>This is the dashboard</h4>
        <JournalList journals={this.props.journals.journals} />
        <AddJournal />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    journals: state.journals
  };
}

export default connect(mapStateToProps, { getJournals })(App);






