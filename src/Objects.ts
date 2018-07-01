import { If } from "./Conditionals";
import { Extends, Not, Predicate } from "./Predicates";

export type IsObject<T> = Extends<T, Object>;
export type NotObject<T> = Not<IsObject<T>>;

// All property names of a type.
export type PropertyNames<O extends object> = keyof O;

// All property types of a type.
export type PropertyTypes<O extends object> = O[keyof O];

// Extracts all property names of O, which are of type T.
export type PropertyNamesOfType<O extends object, T> = {
    [K in keyof O]: If<Extends<O[K], T>, K, never>
}[keyof O];

// Extracts all property names of O, which are not of type T.
export type PropertyNamesNotOfType<O extends object, T> = {
    [K in keyof O]: If<Extends<O[K], T>, never, K>
}[keyof O];

// Extracts properties of type T.
export type PropertiesOfType<O extends object, T> = Pick<O, PropertyNamesOfType<O, T>>;

// Extracts properties not of type T.
export type PropertiesNotOfType<O extends object, T> = Pick<O, PropertyNamesNotOfType<O, T>>;

// Extracts function property names of O.
export type FunctionPropertyNames<O extends object> = PropertyNamesOfType<O, Function>;

// Extracts function properties of O.
export type FunctionProperties<O extends object> = PropertiesOfType<O, Function>;
