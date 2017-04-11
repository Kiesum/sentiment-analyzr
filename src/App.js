import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import JournalList from './JournalList';
import { getJournals } from './actions/index.js';
import { connect } from 'react-redux';
import AddJournal from './AddJournal';
import Navbar from './Navbar'
import { Grid } from 'react-bootstrap';

class App extends Component {

  componentDidMount() {
    this.props.getJournals();
    console.log(this.props.journals)
  }

  render() {
    return (
      <div>  
        <div className="background-cover"></div>
        <Navbar />
        <Grid>
          <AddJournal />
          <JournalList journals={this.props.journals.journals} />
        </Grid>
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






