type TupleToObject<T extends readonly (string|number)[]> = {
  [TK in T[number]]: TK;
};
