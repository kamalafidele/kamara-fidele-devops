describe('Calculator', () => {
    xit('Full Calculation Process', () => {

  
      // check = button
      cy.get('[data-cy*="digits-div"]').within(() =>
        cy
          .findByText(/=/i)
          .should('be.visible')
          .click()
      )

      // Check button status
      cy.findByRole('button', { name: /=/i })
        .should('not.be.disabled')
        .click()
  
  
      // select enable
      cy.waitUntil(() =>
        cy
          .get('*[data-cy="card-menu"]', { timeout: 10000 })
          .then((item) => item.last().click())
      )

      cy.findByText(/paused/i).should('not.exist')
  

      cy.get('*[data-cy="card-menu"]').last().click({ force: true })
      cy.findByRole('menuitem', { name: /edit automation/i }).click({
        force: true,
      })
      cy.get('[data-cy*="new-automation"]', { timeout: 10000 }).should(
        'be.visible'
      )
  
      // send
      cy.findByRole('button', { name: /update automation/i })
        .should('not.be.disabled')
        .click()
  
      // close modal
      cy.get('[data-cy*="new-automation"]', { timeout: 15000 }).should(
        'not.exist'
      )

    })
  })
  