import React from "react";
import UserViews from './UserViews'

const exports = {...UserViews}

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher">
        <h2>Courier</h2>
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

exports.CheckDeliveryStatus = class extends React.Component {
  render() {
    return (
      <div>
        Update delivery status: 
        <button
          onClick={() => {
            this.setState({disabled: true});
            parent.deliveryToShip();
          }}
        >To ship</button>
        <button
          onClick={() => {
            this.setState({disabled: true});
            parent.deliveryOnTheWay();
          }}
        >On the way</button>
        <button
          onClick={() => {
            this.setState({disabled: true});
            parent.deliveryDelivered();
          }}
        >Delivered</button>
      </div>
    );
  }
}

exports.MsgToShip = class extends React.Component {
  render() {
    return (
      <div>
        Order will be shipped out soon.
      </div>
    );
  }
}
exports.MsgOtw = class extends React.Component {
  render() {
    return (
      <div>
        Order is on the way to be delivered.
      </div>
    );
  }
}
exports.MsgDelivered = class extends React.Component {
  render() {
    return (
      <div>
        Order has been delivered.
      </div>
    );
  }
}

exports.GetTemp = class extends React.Component {
  render() {
    const temp = (this.state || {}).temp || defaultTemp;
    return (
      <div>
        Update temperature in degree celsius: 
        <input
          type='number'
          placeholder={defaultTemp}
          min="0"
          max="100"
          onChange={(e) => this.setState({temp: e.currentTarget.value})}
        />
        <button
          onClick={() => parent.GetTemp(temp)}
        >Update temperature</button>
      </div>
    );
  }
}

export default exports;
