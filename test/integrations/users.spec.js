'use strict';
process.env.NODE_ENV = 'test';
process.env.PORT = 8000;

const mocha = require('mocha');
const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../server');
const knex = require('../../db/knex');

describe("users route", () => {
    it('gets a single user', () => {

        return request(app)
            .get('/users/1')
            .then((response) => {
                console.log('response = ', response);
                expect(response.text)
                    .to.include('John Cena');
            });
    });
});

describe("users route", () => {
    it('renders edit profile page', () => {
        return request(app)
            .get('/users/1/edit')
            .then((response) => {
                expect(response.text).to.include('Update User');
            });
    });
});
