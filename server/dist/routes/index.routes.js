"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const tarefa_routes_1 = __importDefault(require("./tarefa.routes"));
const router = (0, express_1.Router)();
router.use((0, cors_1.default)());
router.use((0, express_1.json)());
router.use("/tarefa", tarefa_routes_1.default);
exports.default = router;
