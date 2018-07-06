import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import * as contactAction from './actions/contactAction'

class App extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      editableIndex: null,
      updatedName: '',
    }
  }

  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let contact = {
      name: this.state.name
    }
    this.setState({
      name: ''
    });
    this.props.createContact(contact);
  }

  listView(data, index){
    return (
      <div key={index} className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {
              this.state.editableIndex === index ? (
                <form>
                  <input 
                    value={ data.name }
                    onChange={ e => {
                      this.setState( {
                        updatedName: e.target.value
                      } )
                    } }
                  /> 
                  <input 
                    type='submit' 
                    value='Update'
                  />
                </form>
              ) : (
                data.name
              )
            }
            {/* {data.name} */}
          </li>
        </div>
        <div className="col-md-2">

          <button onClick={(e) => this.editContactForm(e, index)} className="btn btn-danger">
            Edit
          </button>
          {/* <button onClick={(e) => this.editContact(e, index)} className="btn btn-danger">
            Edit
          </button> */}
          <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
            Remove
          </button>
        </div>
    </div> 
    )
  }

  editContactForm(e, index) {
    e.preventDefault()
    this.setState( {
      editableIndex: index
    } )
  }

  deleteContact(e, index){
    e.preventDefault();
    this.props.deleteContact(index);
  }

  editContact( e, index ) {
    e.preventDefault()
    this.props.editContact( {
      index
    } )
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          Summernote
        </header>
        <div className="container">
        <h1>Clientside Contacts Application</h1>
        <hr />
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/><br />
            <input type="submit" className="btn btn-success" value="ADD"/>
          </form>
          <hr />
        { <ul className="list-group">
          {this.props.contacts.map((contact, i) => this.listView(contact, i))}
        </ul> }
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = ( state, ownProps ) => {
  return {
    contacts: state.contacts,
    editable: state.editable,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createContact     : contact => dispatch( contactAction.createContact( contact ) ),
    editContact       : contact => dispatch( contactAction.editContact( contact ) ),
    deleteContact     : index   => dispatch( contactAction.deleteContact( index ) )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( App )
