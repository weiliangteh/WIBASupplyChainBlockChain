'reach 0.1';

const User = {
  ...hasRandom,
  seeOrderOutcome: Fun([UInt], Null),
  seeDeliveryOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Seller = Participant('Seller', {
    ...User,
    getOrderOutcome: Fun([UInt], UInt),
    wager: UInt,
    deadline: UInt,
  });
  const Buyer  = Participant('Buyer', {
    ...User,
    getOrder: Fun([], UInt),
    acceptWager: Fun([UInt], Null),
  });
  const Courier = Participant('Courier', {
    ...User,
    getDeliveryOutcome: Fun([UInt], UInt),
    getTemperature: Fun([UInt], UInt),
  })

  init();

  const informTimeout = () => {
    each([Seller, Buyer], () => {
      interact.informTimeout();
    });
  };

  Buyer.only(() => {
    const order = declassify(interact.getOrder());
  });
  Buyer.publish(order)
  commit();

  Seller.only(() => {
    const orderOutcome = declassify(interact.getOrderOutcome(order));
    const deadline = declassify(interact.deadline);
    const amount = declassify(interact.wager);
  });
  Seller.publish(orderOutcome, deadline, amount)
  commit();

  Buyer.only(() => {
    interact.acceptWager(amount); 
  });
  Buyer.pay(amount)
    .timeout(relativeTime(deadline), () => closeTo(Seller, informTimeout));

  //must be in consensus
  var delivery = 0;
  //var outcome = DRAW;
  invariant(balance() == amount);
  while (delivery == 0 || delivery == 1) {
    commit();

    Courier.only(() => {
      const deliveryOutcome = declassify(interact.getDeliveryOutcome(order));
      const temperature = declassify(interact.getTemperature(order));
    });
    Courier.publish(deliveryOutcome, temperature)

    each([Seller, Buyer], () => {
      interact.seeDeliveryOutcome(order);
    });

    delivery = deliveryOutcome;
    continue;
  }
  assert(delivery == 2);
  transfer(amount * 0.8).to(Seller);
  transfer(amount * 0.2).to(Courier);
  commit();
  
});