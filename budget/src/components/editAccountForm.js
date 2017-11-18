import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAccount } from '../actions';

class EditAccountForm extends Component {
    
      constructor(props) {
        super(props);
        this.state = {
          name: '',
          description: '',
          budgetedAmount: ''
        };
        this.addAccount = this.addAccount.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateBudgetedAmount = this.updateBudgetedAmount.bind(this);
      }
    
      addAccount(event) {
        event.preventDefault();
        this.props.addAccount(this.state);
        this.setState({
          name: '',
          description: '',
          budgetedAmount: ''
        });
      }
    
      updateName(event) {
        this.setState({
          name: event.target.value
        });
      }
    
      updateDescription(event) {
        this.setState({
          description: event.target.value
        });
      }
    
      updateBudgetedAmount(event) {
        this.setState({
          budgetedAmount: event.target.value
        });
      }
    
      render() {
        return (
          <div className='myContainer'>
            <div className='myContainer__title'>EDIT THIS ACCOUNT FIX ME!!!!</div>
            <div className="subContainer">
              <form onSubmit={this.addAccount}>
                <input
                  className='formInput'
                  onChange={this.updateName}
                  placeholder="Account Name"
                  value={this.state.name}
                  required
                />
                <input
                  className='formInput'
                  onChange={this.updateDescription}
                  placeholder="Account Description"
                  value={this.state.description}
                  required
                />
                <input
                  className='formInput'
                  onChange={this.updateBudgetedAmount}
                  placeholder="Budgeted Amount"
                  value={this.state.budgetedAmount}
                  required
                />
                <button className='subContainer__Button' type="submit">Add New Account</button>
              </form>
            </div>
            <Link className='buttonLinks' role='button' exact to='/'>Back to Accounts Main</Link>
          </div>
        );
      }
    }
    
    const mapStateToProps = (state) => {
      return {
        accounts: state.accounts
      };
    };
    
    export default connect(mapStateToProps, { addAccount })(EditAccountForm);