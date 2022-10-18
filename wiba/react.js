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