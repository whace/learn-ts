import { Expect,Equal } from "@type-challenges/utils";

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

type cases = [ Expect<Equal<Expected,MyOmit<Todo,"description" | "title">>>]

interface Expected {
  completed: boolean
}

const todo: TodoPreview = {
  completed: false,
}