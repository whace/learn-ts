/*
  898 - Includes
  -------
  by null (@kynefuk) #easy #array
  
  ### Question
  
  Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.
  
  For example:
  
  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```
  
  > View on GitHub: https://tsch.js.org/898
*/

/* _____________ Your Code Here _____________ */

// type Includes<T extends  any[], U> = T extends [
//   infer First,
//   ...infer Rest
// ]
//   ? First extends U
//     ? true
//     : Includes<Rest, U>
//   : false;
type Equals<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;

// type Equals<T, S> = [T] extends [S] ? ([S] extends [T] ? true : false) : false

type Includes<T extends readonly any[], U> = T extends [infer A1, ...infer A2]
  ? Equals<A1, U> extends true
    ? true
    : Includes<A2, U>
  : false;

type InferT<T> = T extends [infer A1, ...infer A2] ? A1 : "false";

type Infer1 = InferT<[1, 2]>;

type FuncT<A> = (<T>() => (T extends A ? 1 : 2))
type Func1 = FuncT<"a">;

// type Includes<T extends  any[], U> = U extends T[number] ? true : false
type Bool = boolean extends false ? true : false;
const a = [{}];
type A = typeof a;
type AA = A[number];
type AAA = { a: "A" } extends AA ? true : false;
const b = { a: "A" } as const;
type B = typeof b;
type BB = Includes<[{}], { a: "A" }>;

type Ext<T> = T extends false ? "a" : "b";
type Ex = Ext<boolean>;

type ExtB<T> = T extends boolean ? "a" : "b";
type ExB = ExtB<true>;

type U = { a: string } & { b?: number }

const u:U = {a:'1'}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">, true>
  >,
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">, false>
  >,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: "A" }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: "A" }], { readonly a: "A" }>, false>>,
  Expect<Equal<Includes<[{ readonly a: "A" }], { a: "A" }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/898/answer
  > View solutions: https://tsch.js.org/898/solutions
  > More Challenges: https://tsch.js.org
*/
