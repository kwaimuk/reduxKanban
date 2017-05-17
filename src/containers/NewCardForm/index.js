/* jshint esversion: 6 */
import React, { Component } from 'react';

class NewCardForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      cards: [],
      title: '',
      priority: 'low',
      status: '',
      createdBy: '',
      assignedTo: ''
    };

  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addCard(this.state);

    this.setState({ title : '', createdBy : '', assignedTo : '' });
  }

  handleChangeTitle = (event) => {
    this.setState({
      title : event.target.value
    });
  }

  handleChangePriority = (event) => {
    this.setState({
      priority : event.target.value
    });
  }

  handleChangeStatus = (event) => {
    this.setState({
      status : event.target.value
    });
  }

  handleChangeCreatedBy = (event) => {
    this.setState({
      createdBy : event.target.value
    });
  }

  handleChangeAssignedTo = (event) => {
    this.setState({
      assignedTo : event.target.value
    });
  }

  render(){
    return (
      <form id="NewForm" onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleChangeTitle} required/>
        </div>
          <select value={this.state.value} onChange={this.handleChangePriority} required>
            <option value="low" defaultValue="selected">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="blocker" >Blocker</option>
          </select>
          <br />
            <input type="radio" name="status" value="Queue" onChange={this.handleChangeStatus}  required/>In Queue <br />
            <input type="radio" name="status" value="In Progress" onChange={this.handleChangeStatus}  required/>In Progress <br />
            <input type="radio" name="status" value="Done" onChange={this.handleChangeStatus}  required/>Done
          <br/>
        <div>
          <input type="text" placeholder="Created By" value={this.state.createdBy} onChange={this.handleChangeCreatedBy} required/>
        </div>
        <div>
          <input type="text" placeholder="Assigned To" value={this.state.assignedTo} onChange={this.handleChangeAssignedTo} required/>
        </div>
        <div>
          <button type="submit">Add Card</button>
        </div>
      </form>
    );
  }
}

export default NewCardForm;