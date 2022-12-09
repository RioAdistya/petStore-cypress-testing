describe('Petstore API Store Testing', () => {
  it('get store inventory - GET', () => {
    cy.request('/store/inventory').as('getInventory');
    cy.get('@getInventory').then((inventory) => {
      expect(inventory.status).to.equal(200);
    });
  });

  it('Create a new Order', () => {
    let body = {
      id: 1,
      petId: 0,
      quantity: 1,
      shipDate: '2022-12-09T16:07:30.924Z',
      status: 'placed',
      complete: true,
    };
    console.log(body);
    cy.request('POST', '/store/order', body).as('createOrder');
    cy.get('@createOrder').then((createOrder) => {
      expect(createOrder.status).to.eq(200);
    });
  });

  const findOrderById = {
    method: 'GET',
    url: '/store/order/1',
    qs: {
      petId: 14,
    },
  };
  it('get store order by id', () => {
    cy.request(findOrderById).as('findOrderById');
    cy.get('@findOrderById').then((findOrderById) => {
      expect(findOrderById.status).to.eq(200);
    });
  });

  const deleteOrder = {
    method: 'DELETE',
    url: '/store/order/1',
    qs: {
      orderId: 1,
    },
  };
  it('delete Order', () => {
    cy.request(deleteOrder).as('deleteOrder');
    cy.get('@deleteOrder').then((deleteOrder) => {
      expect(deleteOrder.status).to.eq(200);
    });
  });
});
