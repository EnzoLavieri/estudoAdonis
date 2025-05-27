import { DateTime } from "luxon";
import { BaseModel, column, beforeCreate } from "@ioc:Adonis/Lucid/Orm";
import { v4 as uuidv4 } from "uuid";

export default class Medicament extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @beforeCreate()
  public static assignUuid(medicament: Medicament) {
    medicament.id = uuidv4();
  }

  @column()
  public name: string;

  @column()
  public brand: string;

  @column()
  public description: string;

  @column()
  public quantity: number;

  @column()
  public type: string;
  //liquido, pomada, comprimido, etc....
  //ver se é melhor colocar enum e procurar mais "tipos" de medicamentos

  @column()
  public level: string;

  //--> task pra amanha <--
  //- adicionar amanha bool para indicar se é generico ou não
  //- implementar os enums em: type e level

  @column({ columnName: "expirationDate", serializeAs: "expirationDate" })
  public expirationDate: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
