import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h1>superezy</h1>
          {content}
        </header>
      </div>
    )
  }
}

exports.ConnectAccount = class extends React.Component{
  render(){
    return(
      <div>
        Connecting to your account...
        Please wait for a few seconds.
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render(){
    const {bal, standardUnit, parent} = this.props
    const amt = (this.state || {}).amt
    return(
      <div>
        <h2>Fund account</h2>
        <br />
          Balance: {bal} {standardUnit}
        <hr />
          Would you like to fund your account with additional {standardUnit}?
        <br />
          (This only works on certain devnets)
        <br />
        <input
          type='number'
          // placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    )
  }
}

exports.BuyerOrSellerOrCourier = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Please select a role:
        <br />
        <p>
          <button
            onClick={() => parent.selectBuyer()}
          >Buyer</button>
          <br /> Set the wager, deploy the contract.
        </p>
        <p>
          <button
            onClick={() => parent.selectSeller()}
          >Seller</button>
          <br /> Attach to the Buyer's contract.
        </p>
        <p>
          <button
            onClick={() => parent.selectCourier()}
          >Courier</button>
          <br /> Attach to the Buyer's contract.
        </p>
      </div>
    );
  }
}

export default exports;
