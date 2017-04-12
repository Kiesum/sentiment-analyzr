import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import axios from 'axios';
import JournalList from './JournalList';
import { getJournals } from './actions/index.js';
import { connect } from 'react-redux';
import AddJournal from './AddJournal';
import Navbar from './Navbar';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {

  componentDidMount() {
    this.props.getJournals();
  }

  render() {
    return (
      <div>  
        <div className="background-cover"></div>
        <Navbar />
        <Grid>
          <Row>
          { this.props.journals.errors ?
            <Col xs={12} md={6} mdOffset={3} className="alert alert-danger">
              <img className="error-warning" src={require('./img/error-triangle.png')} />{this.props.journals.errors}
            </Col>
            : null 
          }
          </Row>
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






