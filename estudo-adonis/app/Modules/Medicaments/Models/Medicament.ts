import { DateTime } from "luxon";
import { BaseModel, column, beforeCreate } from "@ioc:Adonis/Lucid/Orm";
import { v4 as uuidv4 } from "uuid";
import { MedicamentType } from "../Enums/MedicamentType";
import { MedicamentLevel } from "../Enums/MedicamentLevel";

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
  public type: MedicamentType;

  @column()
  public level: MedicamentLevel;

  @column()
  public generic: boolean;

  @column({ columnName: "expirationDate", serializeAs: "expirationDate" })
  public expirationDate: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
