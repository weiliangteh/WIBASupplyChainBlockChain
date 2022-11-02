import React from "react";
import { render } from "react-dom";
import UserViews from './UserViews'

const exports = {...UserViews}

const sleep = (milliseconds) => new Promise(resolve => setTimeout((resolve, milliseconds)))

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <h2>Buyer</h2>
        {content}
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, wager, standardUnit} = this.props;
    return (
      <div>
        Wager (pay to deploy): <strong>{wager}</strong> {standardUnit}
        <br />
        <button
          onClick={() => parent.deploy()}
        >Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Attacher to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

exports.AcceptWager = class extends React.Component{
  render(){
    const {orderPrice, courierCharges} = this.props
    const {disabled} = this.state || {}
    return(
      <div>
        Order price: ${orderPrice} <br/>
        Courier charges: ${courierCharges} <br/>
        <button
        onClick={() => {
          this.setState({disabled: true})
          wagerAccepted()
        }}
        >Do you accept the pricing?
        </button>
      </div>
    )
  }
}

exports.getOrder = class extends React.Component{
  render(){
    return(
      <p>
        Generating order id...
      </p>
    )
  }
}

export default exports;