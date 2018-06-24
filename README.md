# ts-types

A TypeScript type manipulation library. This is a type-only library,
i.e. it has 0 runtime code.

## Predicates

Predicates are types that are resolved to true or false:


```typescript
type P1<T> = IsNotNull<T>;
type P2<T> = Or<P1<T>, IsString<T>>; 
```

Predicate combinators are defined in [`Predicates.ts`](./src/Predicates.ts).
Predicates for primitive types are defined in [`PrimitiveTypes.ts`](./src/PrimitiveTypes.ts).

Type equality predicate `Eq<X, Y>` can be used with assertions to test type results.

## Assertions

Predicate value can be asserted during compilation time:

```typescript
let _assert_null = AssertTrue<IsNull<null>>;
// user-defined predicates
let _assert_p1 = AssertTrue<P1<boolean>>;
let _assert_p2 = AssertFalse<P2<null>>;
```

## Object Manipulation

Pick or reject properties of a given type:

```typescript
interface Person { name: string; age: number; }

type StringProps = PropertiesOfType<Person, string>;
let _assert_props = AssertTrue<Eq<StringProps, { name: string }>>
```
