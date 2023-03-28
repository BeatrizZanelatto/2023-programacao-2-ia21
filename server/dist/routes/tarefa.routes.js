"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = __importDefault(require("../database"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("READED ITENS");
    const db = yield (0, database_1.default)();
    const result = yield db.all('SELECT * FROM todo');
    res.json(result);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("READED ITEN");
    const db = yield (0, database_1.default)();
    const result = yield db.all('SELECT * FROM todo WHERE id=?', [req.params.id]);
    res.json(result);
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("CREATED NEW ITEM");
    const db = yield (0, database_1.default)();
    const result = yield db.run('INSERT INTO todo(texto) VALUES(?)', [req.body.texto]);
    res.json({ id: result.lastID });
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("UPDATE ITENS");
    const db = yield (0, database_1.default)();
    const result = yield db.run('UPDATE todo SET texto=?, done=? WHERE id=?', [req.body.texto, req.body.done, req.params.id]);
    res.json({ result });
}));
router.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("UPDATE ITEM");
    const db = yield (0, database_1.default)();
    const result = yield db.all('UPDATE todo SET done=? WHERE id=?', [req.body.done, req.params.id]);
    res.json({ result });
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("DELETE");
    const db = yield (0, database_1.default)();
    const result = yield db.all('DELETE FROM todo WHERE id=?', [req.params.id]);
    res.json({ result });
}));
exports.default = router;
