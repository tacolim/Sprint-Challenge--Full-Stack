import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccounts } from '../actions';
import { Link } from 'react-router-dom';

class Accounts extends Component {
    componentDidMount(){
        this.props.getAccounts();
    }

    render(){
       

        return(
            <div className='myContainer'>
                <div className='myContainer__title'>Accounts</div>
                <div className='myContainer__contents'>Click on any account for more information</div>
                <ul className='subContainer'>
                  { this.props.accounts.map((account, i) => {
                       let active;
                       if (account.isActive === true) {
                           active = 'Yes';
                       } else {
                           active = 'No'
                       }
                       const id = account._id;
                      return(
                          <Link className='subContainer__Button' to={`/accounts/${id}`} key={id}>
                            <div className='subContainer__Button_title'>{account.name}</div>
                            <div>Monthly Allolcation: {account.budgetedAmount}</div>
                            <div>Account Active?: {active}</div>
                          </Link>
                      )
                  })}
                </ul>
                <Link className='buttonLinks' role='button' exact to='/newAccountForm'>Add a New Account</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, { getAccounts })(Accounts);