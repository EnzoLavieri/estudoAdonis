import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Medicament from "App/Modules/Medicaments/Models/Medicament";

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
      message: `Medicamento '${medicament.name}' criado com sucesso.`,
    });
  }

  //retorna todos os medicamentos
  public async index({ response }: HttpContextContract) {
    const medicaments = await Medicament.all();

    return response.json({
      medicaments: medicaments,
    });
  }

  //mosta um medicamento por id
  public async show({ params, response }: HttpContextContract) {
    const medicament = await Medicament.findOrFail(params.id);

    return response.json({
      medicament: medicament,
    });
  }

  //exclui um medicamento por id
  public async destroy({ params, response }: HttpContextContract) {
    const medicament = await Medicament.findOrFail(params.id);

    await medicament.delete();

    return response.json({
      message: `Medicamento '${medicament.name}' excluído com sucesso.`,
    });
  }

  //atualiza o medicamento por id
  public async update({ params, request, response }: HttpContextContract) {
    const body = request.body();
    const medicament = await Medicament.findOrFail(params.id);

    medicament.name = body.name;
    medicament.brand = body.brand;
    medicament.description = body.description;
    medicament.quantity = body.quantity;
    medicament.type = body.type;
    medicament.level = body.level;
    medicament.expirationDate = body.expirationDate;
    medicament.generic = body.generic;

    await medicament.save();

    return response.json({
      message: `Medicamento '${medicament.name}' atualizado com sucesso.`,
      body: medicament,
    });
  }
}
