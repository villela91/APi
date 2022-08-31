import { authentication } from "../midlewares/auth.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../doc/swagger.json" assert {type: "json"};


export class UserRoutes {
    constructor(controller, router) {
      this.userController = controller;
      this.router = router;
    }


  
    route() {
      this.router.use('/api-docs', swaggerUi.serve);
      this.router.get('/api-docs', swaggerUi.setup(swaggerDocument));

      this.router.get("/", (req, res) => this.userController.find(req, res));
      this.router.post("/create", (req, res) =>
        this.userController.create(req, res)
      );
      this.router.patch("/update/:id", (req, res) =>
        this.userController.update(req, res)
      );
      this.router.delete("/delete/:id", (req, res) =>
        this.userController.delete(req, res)
      );
      this.router.get("/:id", (req, res) =>
        this.userController.findById(req, res)
      );
      return this.router;
    }
  }