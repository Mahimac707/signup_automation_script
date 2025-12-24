/// <reference types="cypress" />

import 'cypress-file-upload';

Cypress.Commands.add('createTempMail', () => {
    return cy.request('https://api.mail.tm/domains').then(res => {
      const domain = res.body['hydra:member'][0].domain;
      const address = `test${Date.now()}@${domain}`;
      const password = 'Passw0rd!';
  
      return cy.request('POST', 'https://api.mail.tm/accounts', {
        address,
        password
      }).then(() => {
        return cy.request('POST', 'https://api.mail.tm/token', {
          address,
          password
        }).then(tokenRes => {
          return {
            email: address,
            token: tokenRes.body.token
          };
        });
      });
    });
  });
  
  Cypress.Commands.add('getOtpFromMail', (token) => {
    return cy.request({
      method: 'GET',
      url: 'https://api.mail.tm/messages',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      expect(res.body['hydra:member'].length).to.be.greaterThan(0);
  
      const messageId = res.body['hydra:member'][0].id;
  
      return cy.request({
        method: 'GET',
        url: `https://api.mail.tm/messages/${messageId}`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(msg => {
        const body = msg.body.text || msg.body.html;
        return body.match(/\b\d{6}\b/)[0];
      });
    });
  });
  