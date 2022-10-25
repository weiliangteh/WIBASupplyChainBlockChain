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
    price: UInt,
    deadline: UInt,
  });
  const Buyer = Participant('Buyer', {
    ...User,
    getOrder: Fun([], UInt),
    acceptWager: Fun([UInt, UInt], Null),
  });
  const Courier = Participant('Courier', {
    ...User,
    charges: UInt,
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
    const price = declassify(interact.price);
  });
  Seller.publish(orderOutcome, deadline, price);
  commit();

  Courier.only(() => {
    const charges = declassify(interact.charges);
  });
  Courier.publish(charges);
  commit();

  Buyer.only(() => {
    interact.acceptWager(price, charges);
  });
  Buyer.pay(price + charges)
    .timeout(relativeTime(deadline), () => closeTo(Seller, informTimeout));

  //must be in consensus
  var delivery = 0;
  invariant(balance() == (price + charges));
  while (delivery != 2) {
    commit();

    Courier.only(() => {
      const temperature = declassify(interact.getTemperature(order));
      const deliveryOutcome = declassify(interact.getDeliveryOutcome(order));
    });
    Courier.publish(deliveryOutcome, temperature);

    each([Seller, Buyer], () => {
      interact.seeDeliveryOutcome(deliveryOutcome);
    });

    delivery = deliveryOutcome;
    continue;
  }
  assert(delivery == 2);
  transfer(price).to(Seller);
  transfer(charges).to(Courier);
  commit();
  
});