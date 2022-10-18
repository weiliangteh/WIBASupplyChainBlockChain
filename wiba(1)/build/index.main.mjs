// Automatically generated with Reach 0.1.12 (1f18a9f3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f18a9f3)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc0, ctc1, ctc1],
      3: [ctc0, ctc0, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v158 = stdlib.protect(ctc0, await interact.getOrder(), {
    at: './index.rsh:38:47:application',
    fs: ['at ./index.rsh:37:13:application call to [unknown function] (defined at: ./index.rsh:37:17:function exp)'],
    msg: 'getOrder',
    who: 'Buyer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v158],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:40:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v160], secs: v162, time: v161, didSend: v30, from: v159 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v160], secs: v162, time: v161, didSend: v30, from: v159 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v167, v168, v169], secs: v171, time: v170, didSend: v41, from: v166 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v175], secs: v177, time: v176, didSend: v49, from: v174 } = txn3;
  ;
  const v184 = stdlib.safeAdd(v176, v168);
  stdlib.protect(ctc1, await interact.acceptWager(v169, v175), {
    at: './index.rsh:58:25:application',
    fs: ['at ./index.rsh:57:13:application call to [unknown function] (defined at: ./index.rsh:57:17:function exp)'],
    msg: 'acceptWager',
    who: 'Buyer'
    });
  
  const v188 = stdlib.safeAdd(v169, v175);
  
  const txn4 = await (ctc.sendrecv({
    args: [v159, v166, v169, v174, v175, v184],
    evt_cnt: 0,
    funcNum: 3,
    lct: v176,
    onlyIf: true,
    out_tys: [],
    pay: [v188, []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v191, time: v190, didSend: v61, from: v189 } = txn4;
      
      const v192 = stdlib.safeAdd(v169, v175);
      sim_r.txns.push({
        amt: v192,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v196 = stdlib.checkedBigNumberify('./index.rsh:64:18:decimal', stdlib.UInt_max, '0');
      const v197 = v190;
      
      if (await (async () => {
        const v208 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:67:22:decimal', stdlib.UInt_max, '0'));
        const v209 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:67:39:decimal', stdlib.UInt_max, '1'));
        const v210 = v208 ? true : v209;
        
        return v210;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v166,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v174,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v184],
    tys: [ctc2, ctc2, ctc0, ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn4.didTimeout) {
    const txn5 = await (ctc.sendrecv({
      args: [v159, v166, v169, v174, v175, v184],
      evt_cnt: 0,
      funcNum: 4,
      lct: v176,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v238, time: v237, didSend: v119, from: v236 } = txn5;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc2, ctc0, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v238, time: v237, didSend: v119, from: v236 } = txn5;
    ;
    const v239 = stdlib.addressEq(v159, v236);
    const v240 = stdlib.addressEq(v174, v236);
    const v241 = v239 ? true : v240;
    const v242 = stdlib.addressEq(v166, v236);
    const v243 = v241 ? true : v242;
    stdlib.assert(v243, {
      at: 'reach standard library:197:11:dot',
      fs: ['at ./index.rsh:61:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'sender correct',
      who: 'Buyer'
      });
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:33:29:application',
      fs: ['at ./index.rsh:32:9:application call to [unknown function] (defined at: ./index.rsh:32:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:31:28:function exp)', 'at ./index.rsh:61:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Buyer'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v191, time: v190, didSend: v61, from: v189 } = txn4;
    const v192 = stdlib.safeAdd(v169, v175);
    ;
    const v195 = stdlib.addressEq(v159, v189);
    stdlib.assert(v195, {
      at: './index.rsh:60:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Buyer'
      });
    let v196 = stdlib.checkedBigNumberify('./index.rsh:64:18:decimal', stdlib.UInt_max, '0');
    let v197 = v190;
    
    let txn5 = txn4;
    while (await (async () => {
      const v208 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:67:22:decimal', stdlib.UInt_max, '0'));
      const v209 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:67:39:decimal', stdlib.UInt_max, '1'));
      const v210 = v208 ? true : v209;
      
      return v210;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 6,
        out_tys: [ctc0, ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v216, v217], secs: v219, time: v218, didSend: v82, from: v215 } = txn6;
      ;
      const v220 = stdlib.addressEq(v174, v215);
      stdlib.assert(v220, {
        at: './index.rsh:74:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Buyer'
        });
      stdlib.protect(ctc1, await interact.seeDeliveryOutcome(v216), {
        at: './index.rsh:78:34:application',
        fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:30:function exp)'],
        msg: 'seeDeliveryOutcome',
        who: 'Buyer'
        });
      
      const cv196 = v216;
      const cv197 = v218;
      
      v196 = cv196;
      v197 = cv197;
      
      txn5 = txn6;
      continue;
      
      }
    ;
    ;
    return;
    }
  
  
  
  
  
  
  
  };
export async function Courier(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Courier expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Courier expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const v155 = stdlib.protect(ctc0, interact.charges, 'for Courier\'s interact field charges');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v160], secs: v162, time: v161, didSend: v30, from: v159 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v167, v168, v169], secs: v171, time: v170, didSend: v41, from: v166 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v159, v166, v168, v169, v155],
    evt_cnt: 1,
    funcNum: 2,
    lct: v170,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v175], secs: v177, time: v176, didSend: v49, from: v174 } = txn3;
      
      ;
      const v184 = stdlib.safeAdd(v176, v168);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v175], secs: v177, time: v176, didSend: v49, from: v174 } = txn3;
  ;
  const v184 = stdlib.safeAdd(v176, v168);
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: ['time', v184],
    waitIfNotPresent: false
    }));
  if (txn4.didTimeout) {
    const txn5 = await (ctc.sendrecv({
      args: [v159, v166, v169, v174, v175, v184],
      evt_cnt: 0,
      funcNum: 4,
      lct: v176,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v238, time: v237, didSend: v119, from: v236 } = txn5;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc1, ctc0, ctc1, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v238, time: v237, didSend: v119, from: v236 } = txn5;
    ;
    const v239 = stdlib.addressEq(v159, v236);
    const v240 = stdlib.addressEq(v174, v236);
    const v241 = v239 ? true : v240;
    const v242 = stdlib.addressEq(v166, v236);
    const v243 = v241 ? true : v242;
    stdlib.assert(v243, {
      at: 'reach standard library:197:11:dot',
      fs: ['at ./index.rsh:61:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'sender correct',
      who: 'Courier'
      });
    return;
    
    }
  else {
    const {data: [], secs: v191, time: v190, didSend: v61, from: v189 } = txn4;
    const v192 = stdlib.safeAdd(v169, v175);
    ;
    const v195 = stdlib.addressEq(v159, v189);
    stdlib.assert(v195, {
      at: './index.rsh:60:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Courier'
      });
    let v196 = stdlib.checkedBigNumberify('./index.rsh:64:18:decimal', stdlib.UInt_max, '0');
    let v197 = v190;
    
    let txn5 = txn4;
    while (await (async () => {
      const v208 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:67:22:decimal', stdlib.UInt_max, '0'));
      const v209 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:67:39:decimal', stdlib.UInt_max, '1'));
      const v210 = v208 ? true : v209;
      
      return v210;})()) {
      const v213 = stdlib.protect(ctc0, await interact.getTemperature(v160), {
        at: './index.rsh:71:61:application',
        fs: ['at ./index.rsh:70:17:application call to [unknown function] (defined at: ./index.rsh:70:21:function exp)'],
        msg: 'getTemperature',
        who: 'Courier'
        });
      const v214 = stdlib.protect(ctc0, await interact.getDeliveryOutcome(v160), {
        at: './index.rsh:72:69:application',
        fs: ['at ./index.rsh:70:17:application call to [unknown function] (defined at: ./index.rsh:70:21:function exp)'],
        msg: 'getDeliveryOutcome',
        who: 'Courier'
        });
      
      const txn6 = await (ctc.sendrecv({
        args: [v166, v169, v174, v175, v214, v213],
        evt_cnt: 2,
        funcNum: 6,
        lct: v197,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:74:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v216, v217], secs: v219, time: v218, didSend: v82, from: v215 } = txn6;
          
          ;
          const cv196 = v216;
          const cv197 = v218;
          
          await (async () => {
            const v196 = cv196;
            const v197 = cv197;
            
            if (await (async () => {
              const v208 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:67:22:decimal', stdlib.UInt_max, '0'));
              const v209 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:67:39:decimal', stdlib.UInt_max, '1'));
              const v210 = v208 ? true : v209;
              
              return v210;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v166,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v174,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc1, ctc0, ctc1, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v216, v217], secs: v219, time: v218, didSend: v82, from: v215 } = txn6;
      ;
      const v220 = stdlib.addressEq(v174, v215);
      stdlib.assert(v220, {
        at: './index.rsh:74:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Courier'
        });
      const cv196 = v216;
      const cv197 = v218;
      
      v196 = cv196;
      v197 = cv197;
      
      txn5 = txn6;
      continue;
      
      }
    ;
    ;
    return;
    }
  
  
  
  
  
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v153 = stdlib.protect(ctc0, interact.deadline, 'for Seller\'s interact field deadline');
  const v154 = stdlib.protect(ctc0, interact.price, 'for Seller\'s interact field price');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v160], secs: v162, time: v161, didSend: v30, from: v159 } = txn1;
  ;
  const v165 = stdlib.protect(ctc0, await interact.getOrderOutcome(v160), {
    at: './index.rsh:44:61:application',
    fs: ['at ./index.rsh:43:14:application call to [unknown function] (defined at: ./index.rsh:43:18:function exp)'],
    msg: 'getOrderOutcome',
    who: 'Seller'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v159, v165, v153, v154],
    evt_cnt: 3,
    funcNum: 1,
    lct: v161,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v167, v168, v169], secs: v171, time: v170, didSend: v41, from: v166 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v167, v168, v169], secs: v171, time: v170, didSend: v41, from: v166 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v175], secs: v177, time: v176, didSend: v49, from: v174 } = txn3;
  ;
  const v184 = stdlib.safeAdd(v176, v168);
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: ['time', v184],
    waitIfNotPresent: false
    }));
  if (txn4.didTimeout) {
    const txn5 = await (ctc.sendrecv({
      args: [v159, v166, v169, v174, v175, v184],
      evt_cnt: 0,
      funcNum: 4,
      lct: v176,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v238, time: v237, didSend: v119, from: v236 } = txn5;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc2, ctc0, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v238, time: v237, didSend: v119, from: v236 } = txn5;
    ;
    const v239 = stdlib.addressEq(v159, v236);
    const v240 = stdlib.addressEq(v174, v236);
    const v241 = v239 ? true : v240;
    const v242 = stdlib.addressEq(v166, v236);
    const v243 = v241 ? true : v242;
    stdlib.assert(v243, {
      at: 'reach standard library:197:11:dot',
      fs: ['at ./index.rsh:61:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'sender correct',
      who: 'Seller'
      });
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:33:29:application',
      fs: ['at ./index.rsh:32:9:application call to [unknown function] (defined at: ./index.rsh:32:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:31:28:function exp)', 'at ./index.rsh:61:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Seller'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v191, time: v190, didSend: v61, from: v189 } = txn4;
    const v192 = stdlib.safeAdd(v169, v175);
    ;
    const v195 = stdlib.addressEq(v159, v189);
    stdlib.assert(v195, {
      at: './index.rsh:60:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Seller'
      });
    let v196 = stdlib.checkedBigNumberify('./index.rsh:64:18:decimal', stdlib.UInt_max, '0');
    let v197 = v190;
    
    let txn5 = txn4;
    while (await (async () => {
      const v208 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:67:22:decimal', stdlib.UInt_max, '0'));
      const v209 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:67:39:decimal', stdlib.UInt_max, '1'));
      const v210 = v208 ? true : v209;
      
      return v210;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 6,
        out_tys: [ctc0, ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v216, v217], secs: v219, time: v218, didSend: v82, from: v215 } = txn6;
      ;
      const v220 = stdlib.addressEq(v174, v215);
      stdlib.assert(v220, {
        at: './index.rsh:74:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Seller'
        });
      stdlib.protect(ctc1, await interact.seeDeliveryOutcome(v216), {
        at: './index.rsh:78:34:application',
        fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:30:function exp)'],
        msg: 'seeDeliveryOutcome',
        who: 'Seller'
        });
      
      const cv196 = v216;
      const cv197 = v218;
      
      v196 = cv196;
      v197 = cv197;
      
      txn5 = txn6;
      continue;
      
      }
    ;
    ;
    return;
    }
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByALAAEDAggEBgdIcEAmAgEAACI1ADEYQQLqKWRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kkDEABA0khBQxAAKZJIQYMQABZIQYSRCEHNAESRDQESSISTDQCEhFEKGRJNQNXKCA1/0k1BUkiWzX+IQRbNf2ABEohy/w0/hZQNP0WULA0/zEAEkQ0A1cAIDQDgSBbNP80AyEIWzT+MgZCAaohBRJEJDQBEkQ0BEkiEkw0AhIRRChkNQOABJEnNPOwMgY0AyEJWw9ENANXACAxABI0A1dIIDEAEhE0A1cgIDEAEhFEQgG/SCQ0ARJENARJIhJMNAISEUQoZEk1A0khCls1/4FoWzX+gASnZcS0sDIGNAMhCVsMRDT/NP4IiAHzNANXACAxABJENANXICA0/zQDV0ggNP4iMgZCAQ5JIwxAAMtJJQxAAGhIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/1cgIDX+IQhbNf1JNQUXNfyABJdO9xc0/BZQsDIGNAMhClsINfs0/zT+UDT9FlAxAFA0/BZQNPsWUChLAVcAeGdIJDUBMgY1AkIBEUgjNAESRDQESSISTDQCEhFEKGRJNQM1/0k1BUlJIls1/iEEWzX9gRBbNfyABM35pJQ0/hZQNP0WUDT8FlCwNP8xAFA0/RZQNPwWUChLAVcAUGdIJTUBMgY1AkIAtEiBoI0GiAD9IjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwMQAoSwFXACBnSCM1ATIGNQJCAHc1/zX+Nf01/DX7Nfo0/iISNP4jEhFBACA0+jT7FlA0/FA0/RZQKEsBVwBQZ0ghBzUBMgY1AkIAP7EisgE0+7III7IQNPqyB7OxIrIBNP2yCCOyEDT8sgezQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 120,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v167",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v168",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v169",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v175",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v216",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v217",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v167",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v168",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v169",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v175",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v216",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v217",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620013d0380380620013d08339810160408190526200002691620001a3565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008234156007620000d3565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000ca929190620000fd565b50505062000282565b81620000f95760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010b9062000245565b90600052602060002090601f0160209004810192826200012f57600085556200017a565b82601f106200014a57805160ff19168380011785556200017a565b828001600101855582156200017a579182015b828111156200017a5782518255916020019190600101906200015d565b50620001889291506200018c565b5090565b5b808211156200018857600081556001016200018d565b6000818303604080821215620001b857600080fd5b80518082016001600160401b038082118383101715620001e857634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200020257600080fd5b8351945060208501915084821081831117156200022f57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200025a57607f821691505b602082108114156200027c57634e487b7160e01b600052602260045260246000fd5b50919050565b61113e80620002926000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b57806383230757146100df578063a7661d54146100f4578063ab53f2c614610107578063fd5dba2d1461012a57005b80631e93b0f11461008257806321642639146100a657806345f70396146100b957806373b4522c146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610dc6565b61013d565b6100806100c7366004610df0565b6102e1565b6100806100da366004610df0565b61050f565b3480156100eb57600080fd5b50600154610093565b610080610102366004610df0565b6106ba565b34801561011357600080fd5b5061011c61084a565b60405161009d929190610e13565b610080610138366004610e70565b6108e7565b61014d600760005414601a610aaf565b6101678135158061016057506001548235145b601b610aaf565b60008080556002805461017990610e82565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610e82565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610f0a565b604080513381528435602080830191909152850135818301529084013560608201529091507fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f9060800160405180910390a161026834156018610aaf565b6040810151610283906001600160a01b031633146019610aaf565b61028b610c7f565b815181516001600160a01b039182169052602080840151835182015260408085015184519316920191909152606080840151835190910152808201805185830135905251439101526102dc81610ad5565b505050565b6102f1600260005414600c610aaf565b61030b8135158061030457506001548235145b600d610aaf565b60008080556002805461031d90610e82565b80601f016020809104026020016040519081016040528092919081815260200182805461034990610e82565b80156103965780601f1061036b57610100808354040283529160200191610396565b820191906000526020600020905b81548152906001019060200180831161037957829003601f168201915b50505050508060200190518101906103ae9190610f5e565b90506103c66040518060200160405280600081525090565b6040805133815284356020808301919091528501358183015290517f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b89181900360600190a16104173415600b610aaf565b610425438360400151610c2c565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b0390811680835260208086015183168185019081526060808801516040808801918252338389019081528b8601356080808b019182528b5160a0808d019182526003600055436001558551998a019a909a5296518a1693880193909352925193860193909352915190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610508929190610cb9565b5050505050565b61051f6003600054146010610aaf565b6105398135158061053257506001548235145b6011610aaf565b60008080556002805461054b90610e82565b80601f016020809104026020016040519081016040528092919081815260200182805461057790610e82565b80156105c45780601f10610599576101008083540402835291602001916105c4565b820191906000526020600020905b8154815290600101906020018083116105a757829003601f168201915b50505050508060200190518101906105dc9190610fb2565b90506105ef8160a0015143106012610aaf565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c6338360405161062092919061104d565b60405180910390a161064661063d82604001518360800151610c2c565b3414600e610aaf565b805161065e906001600160a01b03163314600f610aaf565b610666610c7f565b60208083015182516001600160a01b0391821690526040808501518451840152606080860151855193169290910191909152608084015183519091015281810180516000905251439101526102dc81610ad5565b6106ca6003600054146015610aaf565b6106e4813515806106dd57506001548235145b6016610aaf565b6000808055600280546106f690610e82565b80601f016020809104026020016040519081016040528092919081815260200182805461072290610e82565b801561076f5780601f106107445761010080835404028352916020019161076f565b820191906000526020600020905b81548152906001019060200180831161075257829003601f168201915b50505050508060200190518101906107879190610fb2565b905061079b8160a001514310156017610aaf565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516107cc92919061104d565b60405180910390a16107e034156013610aaf565b8051610830906001600160a01b0316331461080a5760608201516001600160a01b0316331461080d565b60015b6108265760208201516001600160a01b03163314610829565b60015b6014610aaf565b6000808055600181905561084690600290610d3d565b5050565b60006060600054600280805461085f90610e82565b80601f016020809104026020016040519081016040528092919081815260200182805461088b90610e82565b80156108d85780601f106108ad576101008083540402835291602001916108d8565b820191906000526020600020905b8154815290600101906020018083116108bb57829003601f168201915b50505050509050915091509091565b6108f76001600054146009610aaf565b6109118135158061090a57506001548235145b600a610aaf565b60008080556002805461092390610e82565b80601f016020809104026020016040519081016040528092919081815260200182805461094f90610e82565b801561099c5780601f106109715761010080835404028352916020019161099c565b820191906000526020600020905b81548152906001019060200180831161097f57829003601f168201915b50505050508060200190518101906109b4919061108a565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808201529091507f955174907bb1a212127bbf09e3338775932663cd5b51e4058d5b57da257101ec9060a00160405180910390a1610a1e34156008610aaf565b604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a523386528c8b013585528c8401358352600297889055436001558a5180880191909152945116848a015291519083015251818501528551808203909401845260a00190945281519293610aa99391920190610cb9565b50505050565b816108465760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60208101515115610aee57602081015151600114610af1565b60015b15610b8e57610afe610d77565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015185168187019081528751606090810151818901908152600760005543600155835195860196909652925191840191909152519093169281019290925251608082015260a001604051602081830303815290604052600290805190602001906102dc929190610cb9565b805180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610bce573d6000803e3d6000fd5b50805160408082015160609092015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610c12573d6000803e3d6000fd5b5060008080556001819055610c2990600290610d3d565b50565b600082610c3983826110e2565b9150811015610c795760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610acc565b92915050565b6040518060400160405280610c92610d77565b8152602001610cb4604051806040016040528060008152602001600081525090565b905290565b828054610cc590610e82565b90600052602060002090601f016020900481019282610ce75760008555610d2d565b82601f10610d0057805160ff1916838001178555610d2d565b82800160010185558215610d2d579182015b82811115610d2d578251825591602001919060010190610d12565b50610d39929150610db1565b5090565b508054610d4990610e82565b6000825580601f10610d59575050565b601f016020900490600052602060002090810190610c299190610db1565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b5b80821115610d395760008155600101610db2565b600060608284031215610dd857600080fd5b50919050565b600060408284031215610dd857600080fd5b600060408284031215610e0257600080fd5b610e0c8383610dde565b9392505050565b82815260006020604081840152835180604085015260005b81811015610e4757858101830151858201606001528201610e2b565b81811115610e59576000606083870101525b50601f01601f191692909201606001949350505050565b600060808284031215610dd857600080fd5b600181811c90821680610e9657607f821691505b60208210811415610dd857634e487b7160e01b600052602260045260246000fd5b6040516080810167ffffffffffffffff81118282101715610ee857634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114610f0557600080fd5b919050565b600060808284031215610f1c57600080fd5b610f24610eb7565b610f2d83610eee565b815260208301516020820152610f4560408401610eee565b6040820152606083015160608201528091505092915050565b600060808284031215610f7057600080fd5b610f78610eb7565b610f8183610eee565b8152610f8f60208401610eee565b602082015260408301516040820152606083015160608201528091505092915050565b600060c08284031215610fc457600080fd5b60405160c0810181811067ffffffffffffffff82111715610ff557634e487b7160e01b600052604160045260246000fd5b60405261100183610eee565b815261100f60208401610eee565b60208201526040830151604082015261102a60608401610eee565b60608201526080830151608082015260a083015160a08201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461107b57600080fd5b80604085015250509392505050565b60006020828403121561109c57600080fd5b6040516020810181811067ffffffffffffffff821117156110cd57634e487b7160e01b600052604160045260246000fd5b6040526110d983610eee565b81529392505050565b6000821982111561110357634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220082982507a3f9847f87f4682c600b05a88b7703faa6340d9181b1761fb4a14bf64736f6c634300080c0033`,
  BytecodeLen: 5072,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:41:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:55:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:61:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:87:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:68:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Buyer": Buyer,
  "Courier": Courier,
  "Seller": Seller
  };
export const _APIs = {
  };
