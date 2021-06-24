import { Router } from "express";
import { MedicoController } from "../controllers/MedicoController";

const router = Router();
const medicoController = new MedicoController();

router.post("/medico/cadastrar", medicoController.cadastrar);
router.get("/medico/buscar/:crm", medicoController.listarPorCrm);
router.get("/medico/listar", medicoController.listar);
router.put("/medico/alterar", medicoController.editar);
router.delete("/medico/remover/:crm", medicoController.excluir);

export { router };
