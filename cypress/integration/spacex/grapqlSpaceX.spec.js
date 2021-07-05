describe('GrapQL Request', () => {
  let capsulesList = `query { capsules { id } }`;
  it('basic test', () =>{
    cy.request({
      url: 'https://api.spacex.land/graphql/',
      method: 'POST',
      body: { query: capsulesList },
      failOnStatusCode: false
    }).then
      (response => { cy.log(response.body.data.capsules) 
    });
  });
});
