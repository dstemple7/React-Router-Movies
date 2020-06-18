describe('first test', () => {
  it('nav', () => {
    cy.visit('http://localhost:3000')
  })

it('save movie', () => {
  cy.visit('http://localhost:3000/movies/1')
  cy.get('.save-button').click()
  })

  it('save two movies', () => {
    cy.visit('http://localhost:3000/movies/1')
    cy.get('.save-button').click()
    cy.get('.home-button').click()
    cy.get('div > .movie-list > a:nth-child(2) > .movie-card > h2').click()
    cy.get('.save-button').click()
    cy.get('#root > div > .saved-list > .active:nth-child(3) > .saved-movie').should('be.visible')
    })

    it('save three movies', () => {
      cy.visit('http://localhost:3000/movies/1')
      cy.get('.save-button').click()
      cy.get('.home-button').click()
      cy.get('div > .movie-list > a:nth-child(2) > .movie-card > h2').click()
      cy.get('.save-button').click()
      cy.get('.home-button').click()
      cy.get('div > .movie-list > a:nth-child(3) > .movie-card > h2').click()
      cy.get('.save-button').click()
      cy.get('#root > div > .saved-list > .active:nth-child(4) > .saved-movie').should('be.visible')
      })

      it('save four movies', () => {
        cy.visit('http://localhost:3000/movies/1')
        cy.get('.save-button').click()
        cy.get('.home-button').click()
        cy.get('div > .movie-list > a:nth-child(2) > .movie-card > h2').click()
        cy.get('.save-button').click()
        cy.get('.home-button').click()
        cy.get('div > .movie-list > a:nth-child(3) > .movie-card > h2').click()
        cy.get('.save-button').click()
        cy.get('.home-button').click()
        cy.get('div > .movie-list > a:nth-child(4) > .movie-card > h2').click()
        cy.get('.save-button').click()
        cy.get('#root > div > .saved-list > .active:nth-child(5) > .saved-movie').should('be.visible')
        })

        it('save five movies', () => {
          cy.visit('http://localhost:3000/movies/1')
          cy.get('.save-button').click()
          cy.get('.home-button').click()
          cy.get('div > .movie-list > a:nth-child(2) > .movie-card > h2').click()
          cy.get('.save-button').click()
          cy.get('.home-button').click()
          cy.get('div > .movie-list > a:nth-child(3) > .movie-card > h2').click()
          cy.get('.save-button').click()
          cy.get('.home-button').click()
          cy.get('div > .movie-list > a:nth-child(4) > .movie-card > h2').click()
          cy.get('.save-button').click()
          cy.get('.home-button').click()
          cy.get('div > .movie-list > a:nth-child(5) > .movie-card > h2').click()
          cy.get('.save-button').click()
          cy.get('#root > div > .saved-list > .active:nth-child(6) > .saved-movie').should('be.visible')
          })

          it('save six movies', () => {
            cy.visit('http://localhost:3000/movies/1')
            cy.get('.save-button').click()
            cy.get('.home-button').click()
            cy.get('div > .movie-list > a:nth-child(2) > .movie-card > h2').click()
            cy.get('.save-button').click()
            cy.get('.home-button').click()
            cy.get('div > .movie-list > a:nth-child(3) > .movie-card > h2').click()
            cy.get('.save-button').click()
            cy.get('.home-button').click()
            cy.get('div > .movie-list > a:nth-child(4) > .movie-card > h2').click()
            cy.get('.save-button').click()
            cy.get('.home-button').click()
            cy.get('div > .movie-list > a:nth-child(5) > .movie-card > h2').click()
            cy.get('.save-button').click()
            cy.get('.home-button').click()
            cy.get('div > .movie-list > a:nth-child(6) > .movie-card > h2').click()
            cy.get('.save-button').click()
            cy.get('#root > div > .saved-list > .active:nth-child(7) > .saved-movie').should('be.visible')
            })

it('return home from movie page', () => {
    cy.get('.home-button').click()
    cy.location('pathname').should('not.include', 'movies')
  })

  it('return to saved movie from home page', () => {
    cy.get('.saved-movie').click()
    cy.location('pathname').should('include', 'movies')
  })

  it('visit a saved movie from another movie page', () => {
    cy.visit('http://localhost:3000/movies/1')
    cy.get('.save-button').click()
    cy.get('.home-button').click()
    cy.get('div > .movie-list > a:nth-child(6) > .movie-card > h2').click()
    cy.get('.saved-movie').click()
    cy.location('pathname').should('include', 'movies')
  })

  it('cannot save same movie twice', () => {
    cy.get('.save-button').click()
    cy.get('#root > div > .saved-list > .active:nth-child(3) > .saved-movie').should('not.be.visible')
    })

  it('every link on home page should work', () => {
    cy.visit('http://localhost:3000/movies/0')
    cy.location('pathname').should('include', 'movies/0')
    cy.visit('http://localhost:3000/movies/1')
    cy.location('pathname').should('include', 'movies/1')
    cy.visit('http://localhost:3000/movies/2')
    cy.location('pathname').should('include', 'movies/2')
    cy.visit('http://localhost:3000/movies/3')
    cy.location('pathname').should('include', 'movies/3')
    cy.visit('http://localhost:3000/movies/4')
    cy.location('pathname').should('include', 'movies/4')
    cy.visit('http://localhost:3000/movies/5')
    cy.location('pathname').should('include', 'movies/5')
  })

  it('back should return to previous page', () => {
    cy.visit('http://localhost:3000/movies/1')
    cy.get('.home-button').click()
    cy.go('back')
    cy.location('pathname').should('include', 'movies/1')
    })

})