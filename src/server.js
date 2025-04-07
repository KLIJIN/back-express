import express from "express";
import colors from "@colors/colors";
import cors from "cors";
import path from "path";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// import { favoriteRouter, recipesRouter, summaryRouter } from "./routes";
// import { checkApiKey } from "./middlewares/checkApiKey";
// import { requestLogger } from "./middlewares/requestLogger";
const app = express();
app.use(express.json());
app.use(cors());
// app.use(morgan('dev'))
const PORT = process.env.PORT || 5000;
// app.use(checkApiKey);
// app.use(requestLogger);
// app.use("/api/recipes/search", recipesRouter);
// app.use("/api/recipes/:id/summary/", summaryRouter);
// app.use("/api/recipes/favorite/", favoriteRouter);
app.get("/", async (_req, res) => {
    try {
        const dbPath = path.join(__dirname, "db.json");
        const rawData = await fs.readFile(dbPath, "utf-8");
        const jsonData = JSON.parse(rawData);
        res.json(jsonData.tasks);
    }
    catch (error) {
        console.error("Ошибка при чтении файла:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
// Для локальной разработки
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(colors.cyan(`server running on port ${PORT}`));
    });
}
// Экспорт для Vercel
export default app;
