describe('Petstore API User Testing', () => {
  it('Create a user', () => {
    let body = {
      id: 0,
      username: Cypress.env('username'),
      firstName: 'rio',
      lastName: 'adistya',
      email: 'rio@mai;.com',
      password: Cypress.env('password'),
      phone: '0812128131',
      userStatus: 0,
    };
    console.log(body);
    cy.request('POST', '/user', body).as('createUser');
    cy.get('@createUser').then((createUser) => {
      expect(createUser.status).to.eq(200);
    });
  });

  const loginUser = {
    method: 'GET',
    url: '/user/login',
    qs: {
      username: Cypress.env('username'),
      password: Cypress.env('password'),
    },
  };
  it('Login registered user', () => {
    cy.request(loginUser).as('loginUser');
    cy.get('@loginUser').then((loginUser) => {
      expect(loginUser.status).to.eq(200);
    });
  });

  const getUserByUsername = {
    method: 'GET',
    url: '/user/rioadistya',
    qs: {
      username: Cypress.env('username'),
    },
  };
  it('Get User by Username', () => {
    cy.request(getUserByUsername).as('getUserByUsername');
    cy.get('@getUserByUsername').then((getUserByUsername) => {
      expect(getUserByUsername.status).to.eq(200);
    });
  });

  const updateUser = {
    method: 'PUT',
    url: '/user/rioadistya',
    qs: {
      username: Cypress.env('username'),
    },
    body: {
      id: 0,
      username: Cypress.env('username'),
      firstName: 'rio sangar',
      lastName: 'adistya update',
      email: 'rio@mail.com',
      password: Cypress.env('password'),
      phone: '0812128131',
      userStatus: 0,
    },
  };
  it('Update a user', () => {
    cy.request(updateUser).as('updateUser');
    cy.get('@updateUser').then((updateUser) => {
      expect(updateUser.status).to.eq(200);
    });
  });

  const deleteUser = {
    method: 'DELETE',
    url: '/user/rioadistya',
    qs: {
      username: Cypress.env('username'),
    },
  };
  it('Delete a User', () => {
    cy.request(deleteUser).as('deleteUser');
    cy.get('@deleteUser').then((deleteUser) => {
      expect(deleteUser.status).to.eq(200);
    });
  });

  it('Logout user', () => {
    cy.request('/user/logout').as('logout');
    cy.get('@logout').then((logout) => {
      expect(logout.status).to.equal(200);
    });
  });
});
