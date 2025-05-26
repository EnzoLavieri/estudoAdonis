import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Medicament from "App/Models/Medicament";

export default class MedicamentsController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body();

    const medicament = await Medicament.create(body);

    response.status(201);

    return {
      message: "Medicament created successfully",
      data: medicament,
    };
  }

  public async index({ response }: HttpContextContract) {
    const medicaments = await Medicament.all();

    return response.json({
      message: "Medicaments retrieved successfully",
      data: medicaments,
    });
  }
}
