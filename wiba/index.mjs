import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);
const accCourier = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);
const beforeCourier = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
const ctcCourier = accBob.contract(backend, ctcAlice.getInfo(), ctcBob.getInfo());

const ORDER = ['Item A', 'Item B', 'Item C', 'Item D'];
const ORDER_OUTCOME = ['ACCEPTED', 'PENDING', 'REJECTED'];
const DELIVERY_OUTCOME = ['UNSUCCESSFUL', 'SHIPPING', 'SUCCESSFUL'];

const User = (Who) => ({
  ...stdlib.hasRandom,
  getOrder: async () => {
    const order = Math.floor(Math.random() * 4);
    console.log(`${Who} ordered ${ORDER[order]}`);
    if (Math.random() <= 0.00){
      for (let i = 0; i < 10; i++){
        console.log(`${Who} takes his sweet time...`);
        await stdlib.wait(1);
      }
    }
    return ORDER[order];
  },
  getOrderOutcome: async (order) => {
    const orderOutcome = Math.floor(Math.random() * 3);
    console.log(`${Who} : Order with ${ORDER[order]} is ${ORDER_OUTCOME[orderOutcome]}`);
    if (Math.random() <= 0.00){
      for (let i = 0; i < 10; i++){
        console.log(`${Who} takes his sweet time...`);
        await stdlib.wait(1);
      }
    }
    return ORDER_OUTCOME[orderOutcome];
  },
  getDeliveryOutcome: async (order) => {
    const deliveryOutcome = Math.floor(Math.random() * 3);
    console.log(`${Who} : The order of ${ORDER[order]} is ${DELIVERY_OUTCOME[deliveryOutcome]}`);
    if (Math.random() <= 0.00){
      for (let i = 0; i < 10; i++){
        console.log(`${Who} takes his sweet time...`);
        await stdlib.wait(1);
      }
    }
    return DELIVERY_OUTCOME[deliveryOutcome];
  },
  getTemperature: async (order) => {
    const temperature = (Math.round(Math.random() * 60 * 10) / 10) - 25;
    console.log(`${Who} : The order of ${ORDER[order]} is ${DELIVERY_OUTCOME[temperature]}`);
    if (Math.random() <= 0.00){
      for (let i = 0; i < 10; i++){
        console.log(`${Who} takes his sweet time...`);
        await stdlib.wait(1);
      }
    }
    return DELIVERY_OUTCOME[temperature];
  },
  
  seeOrderOutcome: (orderOutcome) => {
    console.log(`${Who} saw outcome ${ORDER_OUTCOME[orderOutcome]}`);
  },
  seeDeliveryOutcome: (deliveryOutcome) => {
    console.log(`${Who} saw outcome ${DELIVERY_OUTCOME[deliveryOutcome]}`);
  },
  informTimeout: () => {
    console.log(`${Who} observed a timeout`);
  }
});

await Promise.all([
  ctcAlice.p.Alice({
    ...User('Alice'),
    wager: stdlib.parseCurrency(5),
    deadline: 10,
  }),
  ctcBob.p.Bob({
    ...User('Bob'),
    acceptWager:  (amt) => {
      console.log(`Bob accepts the wager of ${fmt(amt)}.`);
    },
  }),
  ctcCourier.p.Courier({
    ...User('Courier'),
  })
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);
console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);