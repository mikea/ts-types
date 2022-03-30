import { Extends, Not } from "./Predicates";

export type IsArray<T> = Extends<T, any[]>;
export type NotArray<T> = Not<IsArray<T>>;

// extract element type from the array
export type ElementType<T> = T extends Array<infer E> ? E : never;

// array with at lest 1 member
export type Array1<T> = [T, ...Array<T>];

// array with at lest 2 member
export type Array2<T> = [T, T, ...Array<T>];
