import { Request, Response } from "express";
import Todo from "../models/todo.model";

// GET /todos
export const getTodos = async (_req: Request, res: Response) => {
  const todos = await Todo.find();
  res.json(todos);
};

// POST /todos
export const createTodo = async (req: Request, res: Response) => {
  const { title } = req.body;

  const todo = new Todo({ title });
  await todo.save();

  res.status(201).json(todo);
};

// GET /todos/:id
export const getTodoById = async (req: Request, res: Response) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) return res.status(404).json({ message: "Todo not found" });

  res.json(todo);
};

// PUT /todos/:id
export const updateTodo = async (req: Request, res: Response) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!todo) return res.status(404).json({ message: "Todo not found" });

  res.json(todo);
};

// DELETE /todos/:id
export const deleteTodo = async (req: Request, res: Response) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);

  if (!todo) return res.status(404).json({ message: "Todo not found" });

  res.json({ message: "Todo deleted" });
};