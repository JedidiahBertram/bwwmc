"use strict";


exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('users')
                .insert([{
                        password: 'not happening',
                        first_name: 'John',
                        last_name: 'Cena',
                        phone: '488-042-8471',
                        email: 'jcena@youcantseeme.wwe',
                        billing_address: '8801 North Fm 620',
                        shipping_address: '',
                        city: 'Austin',
                        state: 'Texas',
                        zip: '78726'
                    },
                    {
                        password: 'not happening',
                        first_name: 'The',
                        last_name: 'Undertaker',
                        phone: '341-998-2713',
                        email: 'taker@deadmanwalking.wwe',
                        billing_address: 'Death Valley',
                        shipping_address: '',
                        city: 'Los Angles',
                        state: 'California',
                        zip: '82283'
                    },
                    {
                        password: 'not happening',
                        first_name: 'Hulk',
                        last_name: 'Hogan',
                        phone: '918-224-9482',
                        email: 'therealhulkhogan@hulkamaniacs.wwe',
                        billing_address: '8801 North Fm 620',
                        shipping_address: '',
                        city: 'Agusta',
                        state: 'Georgia',
                        zip: '30818'
                    },
                ]);
        });
};
