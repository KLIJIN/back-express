import express, { Request, Response } from "express";
import colors from "@colors/colors";
import cors from "cors";

const tasks = [
    {
      id: "1",
      name: "Покупки",
      text: "Купить молоко и хлеб",
      isDone: false,
    },
    {
      id: "2",
      name: "Уборка",
      text: "Помыть посуду",
      isDone: true,
    },
    {
      id: "3",
      name: "Работа",
      text: "Закончить проект",
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

app.get("/tasks", (req: Request, res: Response) => {
  console.log("tasks req.query:", req.query);
  res.json({
    data: tasks,
    first: 1,
    items: 3,
    last: 10,
    next: 2,
    pages: 5,
    prev: null,
  });
});

// Для локальной разработки
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(colors.cyan(`server running on port ${PORT}`));
  });
}

// Экспорт для Vercel
export default app;
