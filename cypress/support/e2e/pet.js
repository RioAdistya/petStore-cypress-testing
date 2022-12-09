describe('Petstore API Pet Testing', () => {
  it('Create a new pet', () => {
    let body = {
      id: 14,
      category: {
        id: 2,
        name: 'cat',
      },
      name: 'kity',
      photoUrls: ['kitycute.png'],
      tags: [
        {
          id: 2,
          name: 'persia',
        },
      ],
      status: 'available',
    };
    console.log(body);
    cy.request('POST', '/pet', body).as('createPet');
    cy.get('@createPet').then((createPet) => {
      expect(createPet.status).to.eq(200);
    });
  });

  it('Update a pet', () => {
    let body = {
      id: 14,
      category: {
        id: 2,
        name: 'cat',
      },
      name: 'kity updated',
      photoUrls: ['kitycuteupdate.png'],
      tags: [
        {
          id: 2,
          name: 'persia',
        },
      ],
      status: 'available',
    };
    console.log(body);
    cy.request('PUT', '/pet', body).as('updatePet');
    cy.get('@updatePet').then((updatePet) => {
      expect(updatePet.status).to.eq(200);
    });
  });

  const updateStatus = {
    method: 'POST',
    url: '/pet/14',
    qs: {
      petId: 14,
      name: 'katty',
      status: 'sold',
    },
  };
  it('Post update status pet', () => {
    cy.request(updateStatus).as('updateStatus');
    cy.get('@updateStatus').then((updateStatus) => {
      expect(updateStatus.status).to.eq(200);
    });
  });

  const findPetById = {
    method: 'GET',
    url: '/pet/14',
    qs: {
      petId: 14,
    },
  };
  it('Get Pet by petId', () => {
    cy.request(findPetById).as('findPetById');
    cy.get('@findPetById').then((findPetById) => {
      expect(findPetById.status).to.eq(200);
    });
  });

  const findPetByStatus = {
    method: 'GET',
    url: '/pet/findByStatus?status=sold',
    qs: {
      status: 'sold',
    },
  };
  it('Get Pet by status', () => {
    cy.request(findPetByStatus).as('findPetByStatus');
    cy.get('@findPetByStatus').then((findPetByStatus) => {
      expect(findPetByStatus.status).to.eq(200);
    });
  });

  const delPet = {
    method: 'DELETE',
    url: '/pet/14',
    qs: {
      petId: 14,
    },
  };
  it('delete pet', () => {
    cy.request(delPet).as('delPet');
    cy.get('@delPet').then((delPet) => {
      expect(delPet.status).to.eq(200);
    });
  });
});
