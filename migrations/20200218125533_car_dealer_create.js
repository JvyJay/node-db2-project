exports.up = function(knex) {
  // The change we what to make to our schema
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();

    tbl
      .string('brand', 128)
      .notNullable()
      .index();

    tbl
      .string('model', 128)
      .notNullable()
      .index();

    tbl.string('description', 256);
  });
};

exports.down = function(knex) {
  // Undoing that change
  return knex.schema.dropTableIfExists('cars');
};
