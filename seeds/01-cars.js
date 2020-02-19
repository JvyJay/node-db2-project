exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function() {
      // Inserts seed entries
      const cars = [
        {
          brand: 'Toyota',
          model: 'Century',
          description: 'Fancy, for a Toyota'
        },
        {
          brand: 'Ford',
          model: 'Mustang Mach-E',
          description: 'Trucks, trucks and more trucks'
        },
        {
          brand: 'Lamborghini',
          model: 'Urus',
          description: "I can't afford it"
        }
      ];
      return knex('cars').insert(cars);
    });
};
