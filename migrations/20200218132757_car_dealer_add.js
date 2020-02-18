exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.string('sigil', 128);
  });
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.dropColumn('sigil');
  });
};
