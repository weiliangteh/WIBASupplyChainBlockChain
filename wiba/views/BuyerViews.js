import React from 'react';
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
    const {parent, order, standardUnit} = this.props;
    return (
      <div>
        Order Id Generated: <strong>{order}</strong> 
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
    const {parent, orderPrice, courierCharges} = this.props
    const {disabled} = this.state || {}
    return(
      <div>
        Order price: ${orderPrice} <br/>
        Courier charges: ${courierCharges} <br/>
        Do you accept the pricing?
        <button
        onClick={() => {
          this.setState({disabled: true})
          parent.wagerAccepted()
        }}
        >Yes, I accept.
        </button>
        <button
        onClick={() => {
          this.setState({disabled: true})
          parent.wagerRejected()
        }}
        >No, I decline.
        </button>
      </div>
    )
  }
}

exports.getOrderId = class extends React.Component{
  render(){
    const {parent, generateId, standardUnit} = this.props;
    const order = (this.state || {}).order || generateId;
    return(
      <div><strong>Order id:</strong>
        <input
          type='number'
          placeholder={generateId}
          onChange={(e) => this.setState({order: e.currentTarget.value})}
        />
        <button onClick={()=> parent.next(order)}
        >Confirm</button>
      </div>
    )
  }
}

exports.IDGenerated = class extends React.Component{
  render(){
    const {id} = this.props
    return(
      <div>
        <p>Order id : ${id}</p>
      </div>
    )
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

exports.seeDeliStatus = class extends React.Component {
  render(){
    const {stt}=this.props
    return(
      <div>
        Order Delivery Status: {stt}
      </div>
    )
  }
}

export default exports;