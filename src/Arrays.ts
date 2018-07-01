import { Extends, Not } from "./Predicates";

export type IsArray<T> = Extends<T, any[]>;
export type NotArray<T> = Not<IsArray<T>>;

export type ElementType<T> = T extends Array<infer E> ? E : never;
