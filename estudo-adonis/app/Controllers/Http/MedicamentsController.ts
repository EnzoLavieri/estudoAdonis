import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Medicament from "App/Models/Medicament";

//implementar depois erros e exceções
//https://legacy.adonisjs.com/docs/3.2/error-and-exceptions
//https://docs.adonisjs.com/guides/basics/exception-handling#exception-handling

export default class MedicamentsController {
  //cria um novo medicamento
  public async store({ request, response }: HttpContextContract) {
    const body = request.body();

    const medicament = await Medicament.create(body);

    response.status(201);

    return response.json({
      message: "Medicamento criado com sucesso!",
      data: medicament,
    });
  }

  //retorna todos os medicamentos
  public async index({ response }: HttpContextContract) {
    const medicaments = await Medicament.all();

    return response.json({
      data: medicaments,
    });
  }

  //mosta um medicamento por id
  public async show({ params, response }: HttpContextContract) {
    const medicament = await Medicament.findOrFail(params.id);

    return response.json({
      data: medicament,
    });
  }
}
