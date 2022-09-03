/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #easy #array
  
  ### Question
  
  Implement a generic `First<T>` that takes an Array `T` and returns it's first element's type.
  
  For example:
  
  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]
  
  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```
  
  > View on GitHub: https://tsch.js.org/14
*/


/* _____________ Your Code Here _____________ */
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0]: never
type First<T extends any[]> = T extends [infer First, ... infer Rest] ? First : never
// type First<T extends any[]> = T[0]

type args = [1,"2"]


type t1 = args[number]

type T = []

type T1 = T[number]

// 看看 某个值是不是在union 里面
// type t2 = T[0] extends args[number] ? "true": "false"


type Tail<T extends any[]> = T extends [infer First, ...infer Rest] ? Rest  : never

type t4 = Tail<[1]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/14/answer
  > View solutions: https://tsch.js.org/14/solutions
  > More Challenges: https://tsch.js.org
*/

