import React from "react";

const exports = {}

exports.SeeOrderOut = class extends React.Component {
  render(){
    const {status} = this.props
    return(
      <div>
        The order status: {status} 
      </div>
    )
  }
}

exports.SeeDeliveryOut = class extends React.Component {
  render(){
    const {status} = this.props
    return(
      <div>
        The delivery status: {status} 
      </div>
    )
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    return (
      <div>
        Your shipment is arrived safely.
        <br/>Thank you for using our service.
      </div>
    );
  }
}


exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        No reply from the other party.
        Ending the contract now...
      </div>
    );
  }
}

export default exports;