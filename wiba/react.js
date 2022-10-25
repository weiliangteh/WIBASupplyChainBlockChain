import React from 'react'
import AppViews from './views/AppViews'
import { renderDOM, renderView } from './views/render'
import './index.css'
import * as backend from './build/index.main.mjs'
import { loadStdlib } from '@reach-sh/stdlib'
const reach = loadStdlib(process.env)

// import My_ALGO wallet
import { ALGO_MyAlgoConnect as MyAlgoConnect }
  from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect
}));

const orderStatus = ['To ship','On the way', 'Delivered']
const {standardUnit} = reach
const defaults = {standardUnit}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {view: 'ConnectAccount', ...defaults}
  }
  async componentDidMount(){
    const acc = await reach.getDefaultAccount()
    const balAtomic = await reach.balanceOf(acc)
    const bal = reach.formatCurrency(balAtomic, 4)
    this.setState({acc, bal})
    if(await reach.canFundFromFaucet()){
      this.setState({view: 'FundAccount'})
    }else{
      this.setState({view: 'DeployerOrAttacher'})
    }
  }
  async fundAccount(fundAmount){
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount))
    this.setState({view: 'DeployerOrAttacher'})
  }
  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'})}
  selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher})}
  selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer})}
  render(){ return renderView(this, AppViews) }
}

class User extends React.Component {
  seeOrderOutcome(order){  
    this.setState({view: 'SeeOrderOut', status: orderStatus[order]})  
  }
  informTimeout() { this.setState({view: 'Timeout'}) }
}

class Buyer extends User {
  constructor(props) {
    super(props)
    this.state = {view: 'Attach'}
  }
  // getorder
  //acceptwager
  async acceptWager(orderPriceAtomic, courierChargesAtomic){
    const orderPrice = reach.formatCurrency(orderPriceAtomic, 4)
    const courierCharges = reach.formatCurrency(courierChargesAtomic, 4)
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptWager', orderPrice, courierCharges, resolveAcceptedP})
    })
  }
  async deploy() {
    const ctc = this.props.acc.contract(backend)
    this.setState({view: 'Deploying', ctc})
    this.wager = reach.parseCurrency(this.state.wager)
    this.deadline = {ETH:100, ALGO:100, CFX: 1000}[reach.connector]
    backend.Buyer(ctc, this)
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2)
    this.setState({view: 'WaitingForAttacher', ctcInfoStr})
  }
  async wagerAccepted(){
    this.state.resolveAcceptedP()
    this.setState({view: 'WaitingForTurn'})
  }
  render() { return renderView(this, DeployerViews) }
}

class Seller extends User {
  constructor(props) {
    super(props)
    this.state = {view: 'Attach'}
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr))
    this.setState({view: 'Attaching'})
    backend.Seller(ctc, this)
  }

  termsAccepted(){
    this.state.resolveAcceptedP()
    this.setState({view: 'WaitingForTurn'})
  }
  // getOrderOutcome function
  render() { return renderView(this, AttacherViews) }
}



renderDOM(<App />)