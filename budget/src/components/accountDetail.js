import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAccount } from '../actions';
import { Link } from 'react-router-dom';

class AccountDetail extends Component {
  componentDidMount(){
    this.props.getAccount(this.props.match.params.id);
  }

  render() {
    const id = this.props.match.params.id;

    if(!this.props.account) {
      return <h2>Loading Account...</h2>
    } else {
      return(
        <div>
          <h3>Details for {this.props.account.title}</h3>
          <div></div>
          <Link exact to='/'>Back to Accounts Main</Link>
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
