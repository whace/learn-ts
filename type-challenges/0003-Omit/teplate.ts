type MyOmit<T, K> = {
  [TK in keyof T as TK extends K ? never : TK]: T[TK]
}