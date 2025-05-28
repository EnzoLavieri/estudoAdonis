/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import MedicamentsController from "App/Modules/Medicaments/Controllers/Http/MedicamentsController";
import Route from "@ioc:Adonis/Core/Route";

const medicamentsController = new MedicamentsController();

Route.group(() => {
  Route.get("/", async () => {
    return { api: "online =)" };
  });

  Route.get(
    "/medicaments",
    medicamentsController.index.bind(medicamentsController)
  );
  Route.post(
    "/medicaments",
    medicamentsController.store.bind(medicamentsController)
  );
  Route.get(
    "/medicaments/:id",
    medicamentsController.show.bind(medicamentsController)
  );
  Route.put(
    "/medicaments/:id",
    medicamentsController.update.bind(medicamentsController)
  );
  Route.delete(
    "/medicaments/:id",
    medicamentsController.destroy.bind(medicamentsController)
  );
}).prefix("/api");
