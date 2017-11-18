import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAccount } from '../actions';
import { Link } from 'react-router-dom';

class AccountDetail extends Component {
  componentDidMount(){
    this.props.getAccount(this.props.match.params.id);
  }



  render() {
    console.log('acct detail props', this.props);

    if(!this.props.account) {
      return <div className='myContainer__title'>Loading Account...</div>
    } else {
      return(
        <div className='myContainer'>
          <div className='myContainer__title'>Details for Account: {this.props.account.name}</div>
          <div className='subContainer'>
            <div className='myContainer__contents'>Description: {this.props.account.description}</div>
            <div className='myContainer__contents'>Monthly Allocation: {this.props.account.budgetedAmount}</div>
            <div className='myContainer__contents'>Account Active: {String(this.props.account.isActive)}</div>
            <Link className='buttonLinks' to={`/editAccountForm/${this.props.account._id}`}>Edit This Account</Link>
          </div>
          <Link className='buttonLinks' to='/'>Back to Accounts Main</Link>
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps, { getAccount })(AccountDetail);
