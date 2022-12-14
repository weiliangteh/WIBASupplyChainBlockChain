import React from "react";
import UserViews from './UserViews'

const exports = {...UserViews}

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher">
        <h2>Seller</h2>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div>
        Please paste the contract info to attach to:
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >Attach</button>
      </div>
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        Attaching, please wait...
      </div>
    );
  }
}

exports.AcceptTerms = class extends React.Component {
  render() {
    const {wager, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        The terms of the game are:
        <br /> Wager: {wager} {standardUnit}
        <br />
        <button
          disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.termsAccepted();
          }}
        >Accept terms and pay wager</button>
      </div>
    );
  }
}

exports.WaitingForTurn = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for the response from the other party...
        <br />Hold on a moment...
      </div>
    );
  }
}

exports.AcceptOrder = class extends React.Component {
  render() {
    return (
      <div>
        Do you want to accept or reject the order from buyer?
        <button
          onClick={() => {
            this.setState({disabled: true});
            parent.orderAccepted();
          }}
        >Accept the order</button>
        <button
          onClick={() => {
            this.setState({disabled: true});
            parent.orderRejected();
          }}
        >Reject the order</button>
      </div>
    );
  }
}

exports.ThankYou = class extends React.Component {
  render() {
    return (
      <div>
        Thank you for the reply whether to accept/reject the order.
      </div>
    );
  }
}

export default exports;
