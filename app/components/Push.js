import React, { Component } from 'react';
// import { connect } from 'react-redux';

export default class Push extends Component{
  render(){
    return(
      <button className="btn btn-large btn-primary">
        <span className="icon icon-down-circled icon-text"></span>
        Push
      </button>
    );
  }
}

