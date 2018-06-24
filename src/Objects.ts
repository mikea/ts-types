import { Extends, If, Predicate } from "./Predicates";
import { IsFunction } from "./PrimitiveTypes";

// All property names of a type.
export type PropertyNames<O extends object> = keyof O;

// Extracts all property names of O, which are of type T.
export type PropertyNamesOfType<O extends object, T> = {
    [K in keyof O]: If<Extends<O[K], T>, K, never>
}[keyof O];

// Extracts properties of type T.
export type PropertiesOfType<O extends object, T> = Pick<O, PropertyNamesOfType<O, T>>;

// Extracts function property names of O.
export type FunctionPropertyNames<O extends object> = PropertyNamesOfType<O, Function>;

// Extracts function properties of O.
export type FunctionProperties<O extends object> = PropertiesOfType<O, Function>;
