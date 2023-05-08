let number = -1;

before(() => {
  cy.task<number>('install').then(x => {
    number = x;
  });
});

describe('sample test', () => {
  it('should pass', () => {
    cy.visit(`https://google.com/search?query=${number}`)
    cy.wait(5000);
  });
});
