/* jshint esversion: 6 */
import React, { Component } from 'react';


class Card extends Component {
  constructor(props){
    super(props);

  }


  handleClick(props) {
    var newData = Object.assign({}, props);



         console.log("original",newData);
    switch (newData.status) {
      case "Queue":
        newData.status = "In Progress";
                 console.log("props1",newData);
        break;
      case "In Progress":
        newData.status = "Done";
                 console.log("props2",newData);
        break;
      case "Done":
        newData.status = "Queue";
                 console.log("props3",newData);
        break;
    }


  }

  updateCard(props){


    // update my parent's cards state
    this.props.updateCard(props);

    const title = "";
    const priority = "";
    const status = "";
    const createdBy = "";
    const assignedTo = "";
  }

//prevents refresh
  handleSubmit(event) {
    event.preventDefault();
    this.updateCard();
  }






  render(){
    return (
  <div className={`card ${this.props.priority}`}>
    <form onSubmit={this.handleSubmit}>
    <br />
    <p>Task: { this.props.title } </p>
    <div>Priority:  { this.props.priority }</div>
    <div onClick={() =>this.handleClick(this.props)} >Status: { this.props.status }</div>
    <div>Created By:  { this.props.createdBy }</div>
    <div>Assigned To:  { this.props.assignedTo }</div>
          <button type="submit">Update Card</button>
    </form>
  </div>
);
  }
}

export default Card;

