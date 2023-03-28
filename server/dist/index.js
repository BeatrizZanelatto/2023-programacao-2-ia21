"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(index_routes_1.default);
app.listen(PORT, () => console.log(`⚡ server is running, on port ${PORT}`));
