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
            <div>
                <h3>Accounts</h3>
                <ul className='accountList'>
                  { this.props.accounts.map((account, i) => {
                      return(
                          <Link className='accountLinks' to={`/accounts/${account.id}`} key={account.id}>{account.name} -- Active: {account.isActive}</Link>
                      )
                  })}
                </ul>
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