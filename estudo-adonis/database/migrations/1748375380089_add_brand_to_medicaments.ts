import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class AddBrandToProducts extends BaseSchema {
  protected tableName = "medicaments"; // Nome da tabela

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string("brand"); // ou outro tipo conforme necessário
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn("brand");
    });
  }
}
