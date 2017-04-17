'use strict';
process.env.NODE_ENV = 'test';
process.env.PORT = 8000;

const mocha = require('mocha');
const expect = require('chai')
    .expect;
const request = require('supertest');

const app = require('../../server');
const knex = require('../../db/knex');


describe("menu_items route", () => {
    describe("#index", () => {
        it('shows all the menu items', () => {
            return request(app)
                .get('/menu_items')
                .then((response) => {
                    expect(response.text)
                        .to.include('Signature Chow');
                });
        });
    });
});
