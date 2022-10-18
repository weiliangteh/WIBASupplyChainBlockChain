import React from "react";

const exports = {}

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
        Thank you for using our service.
        <br/>Your shipment is arrived safely.
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