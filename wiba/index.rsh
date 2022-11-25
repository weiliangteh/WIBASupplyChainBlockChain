'reach 0.1';

const User = {
  ...hasRandom,
  seeOrderOutcome: Fun([UInt], Null),
  seeDeliveryStatus: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Seller = Participant('Seller', {
    ...User,
    getOrderOutcome: Fun([UInt], Null),       // take in buyer order, return accept/decline
    price: UInt,
    deadline: UInt,
  });
  const Buyer = Participant('Buyer', {
    ...User,
    //getOrder: Fun([], UInt),                // take order form buyer and return 
    order: UInt,
    acceptWager: Fun([UInt, UInt], Null),   // take in seller price & courier service cost, if no exit program
  });
  const Courier = Participant('Courier', {
    ...User,
    charges: UInt,
    temperature: UInt,
    deliveryOutcome: UInt, 
    getDeliveryStatus: Fun([], UInt),    // order status (ship)
    getTemperature: Fun([], UInt),        // ask courier staff for shipment temperature thn return it
  })

  init();

  const informTimeout = () => {
    each([Seller, Buyer], () => {
      interact.informTimeout();
    });
  };

  Buyer.only(() => {
    const order = declassify(interact.order);
  });
  Buyer.publish(order)
  commit();
  
  Seller.only(() => {
    //interact.getOrderOutcome(order)
    const deadline = declassify(interact.deadline);
    const price = declassify(interact.price);
  });
  Seller.publish(deadline, price);
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
      const temperature = declassify(interact.getTemperature());
      const deliveryOutcome = declassify(interact.getDeliveryStatus());
    });
    Courier.publish(deliveryOutcome, temperature);

    each([Seller, Buyer], () => {
      interact.seeDeliveryStatus(deliveryOutcome);
    });

    delivery = deliveryOutcome;
    continue;
  }
  assert(delivery == 2);
  transfer(price).to(Seller);
  transfer(charges).to(Courier);
  commit();
  
});
