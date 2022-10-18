import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib();

const USERS = {
  'c' : 'Courier', 'C' : 'Courier',
  'b' :  'Buyer', 'B' : 'Buyer',
  's' : 'Seller', 'S' : 'Seller',
}

const who = await ask.ask(
  `Which type of user you are?`,
  (x) => {
    const user = USERS[x];

    if(user == undefined) {
      throw Error(`Invalid user: ${user}`)
    }
    return user;
  }
);

console.log(`Starting Supply Chain Service as ${who}`);

let acc = null;
const createAcc = await ask.ask(
  `Would you like to create an account? (only possible on devnet)`,
  ask.yesno
);
if(createAcc){
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
  const secret = await ask.ask(
    `What is your account secret?`,
    (x => x)
  );
  acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if(who == 'Buyer'){
  //console.log('testing');
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contact is deployed as = ${JSON.stringify(info)}`);});
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}`);

const interact = { ...stdlib.hasRandom };

interact.informTimeout = () => {
  console.log(`There was a timeout`);
  process.exit(1);
};

if(who == 'Seller') {
  const amt = await ask.ask(
    `How much do you want to sell?`,
    stdlib.parseCurrency
  );
  interact.price = amt;
  interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
} else if (who == 'Courier') {
  const amt = await ask.ask(
    `How much do you want to charges?`,
    stdlib.parseCurrency
  )
  interact.charges = amt;
} else if (who == 'Buyer'){
  interact.acceptWager = async (price, charges) => {
    const accepted = await ask.ask(
      `Do you accept the price of ${fmt(price)} and service charges of ${fmt(charges)}?`,
      ask.yesno
    );
    if(!accepted){
      process.exit(0);
    }
  };
}

const ORDER = ['Item A', 'Item B', 'Item C', 'Item D'];
const ORDERS = {
  A: 0, a: 0,
  b: 1, b: 1,
  c: 2, c: 2,
  d: 3, d: 3,
};
const ORDER_OUTCOME = ['ACCEPTED', 'PENDING', 'REJECTED'];
const DELIVERY_OUTCOME = ['UNSUCCESSFUL', 'SHIPPING', 'SUCCESSFUL'];

interact.seeOrderOutcome = (orderOutcome) => {
    console.log(`${who} saw outcome ${ORDER_OUTCOME[orderOutcome]}`);
};

interact.seeDeliveryOutcome = (deliveryOutcome) => {
    console.log(`${who} saw outcome ${DELIVERY_OUTCOME[deliveryOutcome]}`);
};

if(who == 'Courier') {
  interact.getDeliveryOutcome = (order) => {
    ask.ask(
      `Enter the delivery outcome of ${ORDER[order]}`
    );
  };

  interact.getTemperature = (order) => {
    ask.ask(
      `Enter the temperature of the ${ORDER[order]}`,
      (x => x)
    );
  };
} else if(who == 'Buyer') {
  interact.getOrder = () => {
    ask.ask(
      'Which item you want to order?',
      (x) => {
        const order = ORDERS[x];
        if(order == undefined){
          throw Error(`Not a valid order: ${order}`);
        }
        return order;
      }
    )
  };
} else {
  interact.getOrderOutcome = (order) => {
    ask.ask(
      `The buyer ordered ${ORDER[order]}, do you want to proceed the order?\n
      0: Accept the order\n
      1: Pending the order\n
      2: Reject the order`,
      (x) => {
        if(x < 0 && x > 2){
          throw Error(`Not a valid input: ${x}`);
        }
        return x;
      }
    );
  };
}

const part = who == 'Courier' ? ctc.p.Courier :
    who == 'Buyer' ? ctc.p.Buyer: ctc.p.Seller;
await part(interact);

const after = await getBalance();
console.log(`You balance is ${after}`);
ask.done();