import express, { Request, Response } from "express";
import colors from "@colors/colors";
import cors from "cors";

const tasks = [
  {
    id: "1",
    name: "Первая",
    text: "sadf",
    isDone: true,
  },
  {
    id: "2",
    name: "Вторая",
    text: "sadf",
    isDone: false,
  },
];
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

app.get("/", (_req: Request, res: Response) => {
  res.json(tasks);
});

// Для локальной разработки
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(colors.cyan(`server running on port ${PORT}`));
  });
}

// Экспорт для Vercel
export default app;
