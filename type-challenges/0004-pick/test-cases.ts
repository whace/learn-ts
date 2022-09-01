import {Equal, Expect} from "@type-challenges/utils"

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

type cases = [
  Expect<Equal<Expected,MyPick<Todo,"title">>>
]

interface Expected {
  title: string;
}

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}