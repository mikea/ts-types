import { If } from "./Conditionals";
import { IsBoolean, IsFalse, IsTrue } from "./PrimitiveTypes";

// A Predicate is a type that statically evaluates to true or false.

export type Predicate<T> = true | false;

// X extends Y
export type Extends<X, Y> = X extends Y ? true : false;

// Type equality
export type Eq<X, Y> = And<Extends<X, Y>, Extends<Y, X>>;

// Logical And
export type And<P1, P2> = If<P1, P2, false>;
export type And3<P1, P2, P3> = And<P1, And<P2, P3>>;

// Logical Or
export type Or<P1, P2> = If<P1, true, P2>;

// Logical Not
export type Not<P> = If<P, false, true>;
