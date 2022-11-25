import React from 'react';
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

exports.SetCharges = class extends React.Component {
  render(){
    const {parent, defaultCharges, standardUnit} = this.props;
    const charges = (this.state || {}).charges || defaultCharges;
    return(
      <div>
        <input
          type='number'
          placeholder={defaultCharges}
          onChange={(e) => this.setState({charges: e.currentTarget.charges})}
        /> {standardUnit}
        <br />
        <button
          onClick={() => parent.setCharge(charges)}
        >Set Courier Charge</button>
      </div>
    )
  }
}

exports.Attach = class extends React.Component {
  render() {
    const {parent, charges} = this.props;
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
          onClick={() => parent.attach(ctcInfoStr, charges)}
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

exports.GetTemp = class extends React.Component {
  render() {
    const {parent, defaultTemp} = this.props;
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
          onClick={() => parent.getTemp(temp)}
        >Update temperature</button>
      </div>
    );
  }
}

exports.returnTemp = class extends React.Component{
  render(){
    return(
      <div>
        Updating temperature to system...
      </div>
    )
  }
}

exports.CheckDeliveryStatus = class extends React.Component {
  render() {
    const {parent, defaultStatus} = this.props;
    const status = (this.state || {}).status || defaultStatus;
    return (
      <div>
        Update delivery status: 
        <input
          type='number'
          placeholder={defaultStatus}
          min="0"
          max="2"
          onChange={(e) => this.setState({status: e.currentTarget.value})}
        ></input>
        <button
          onClick={() => parent.updateStatus(status)}
        >Update status</button>
      </div>
    );
  }
}

exports.updateStatus = class extends React.Component{
  render(){
    return(
      <div>
        Updating delivery status to system...
      </div>
    )
  }
}

exports.viewStatus = class extends React.Component {
  render(){
    const {parent, dS} = this.props
    return(
      <div>
        Order Delivery Status: {dS}
      </div>
    )
  }
}

export default exports;
