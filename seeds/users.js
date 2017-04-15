
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 'jcena', password: 'not happening', full_name: 'John Cena', phone:'488-042-8471', email:'jcena@youcantseeme.wwe', address: '8801 North Fm 620', city:'Austin', state:'Texas', zip:'78726'},
        {user_id: 'undertaker', password: 'not happening', full_name: 'The Undertaker', phone:'341-998-2713', email:'taker@deadmanwalking.wwe', address: 'Death Valley', city:'Los Angles', state:'California', zip:'82283'},
        {user_id: 'hulkhogan', password: 'not happening', full_name: 'Hulk Hogan', phone:'918-224-9482', email:'therealhulkhogan@hulkamaniacs.wwe', address: '8801 North Fm 620', city:'Agusta', state:'Georgia', zip:'30818'},
      ]);
    });
};
