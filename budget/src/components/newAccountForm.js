import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAccount } from '../actions';

class NewAccountForm extends Component {
    
      constructor(props) {
        super(props);
        this.state = {
          name: '',
          age: '',
          height: ''
        };
        this.addAccount = this.addAccount.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateAge = this.updateAge.bind(this);
        this.updateHeight = this.updateHeight.bind(this);
      }
    
      addAccount(event) {
        event.preventDefault();
        this.props.addAccount(this.state);
        this.setState({
          name: '',
          age: '',
          height: ''
        });
      }
    
      updateName(event) {
        this.setState({
          name: event.target.value
        });
      }
    
      updateAge(event) {
        this.setState({
          age: event.target.value
        });
      }
    
      updateHeight(event) {
        this.setState({
          height: event.target.value
        });
      }
    
      render() {
        return (
          <div className="AccountForm">
            <form onSubmit={this.addAccount}>
              <input
                onChange={this.updateName}
                placeholder="Account Name"
                value={this.state.name}
                required
              />
              <input
                onChange={this.updateDescription}
                placeholder="Account Description"
                value={this.state.description}
                required
              />
              <input
                onChange={this.updateBudgetedAmount}
                placeholder="Budgeted Amount"
                value={this.state.budgetedAmount}
                required
              />
              <div>
                <label for="isActive">Is Account Active?</label>  
                <input type="checkbox" id="isActive" name="interest" value="isActive" checked />              
              </div>
              <button type="submit">Add New Account</button>
            </form>
            <button><Link exact to='/'>Back to Accounts Main</Link></button>
          </div>
        );
      }
    }
    
    const mapStateToProps = (state) => {
      return {
        accounts: state.accounts
      };
    };
    
    export default connect(mapStateToProps, { addAccount })(NewAccountForm);
    


// const NewAccountForm = () => {
//   return(
//     <div>
//       <h2>New Account Form</h2>
//       <
//       <Link exact to='/'>Back to Accounts Main</Link>
//     </div>
//   )
// }

// export default NewAccountForm;
