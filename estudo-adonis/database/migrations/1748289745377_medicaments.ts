import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Medicaments extends BaseSchema {
  protected tableName = "medicaments";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").primary();
      table.string("name");
      table.string("brand");
      table.string("description");
      table.integer("quantity");
      table.string("type");
      table.date("expirationDate");
      table.string("level");
      table.boolean("generic").defaultTo(false);

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
