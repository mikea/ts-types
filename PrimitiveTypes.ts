import { And3, Extends, Not, Or } from "./Predicates";

// Primitive types predicates.

export type IsBoolean<T> = Extends<T, boolean>;
export type NotBoolean<T> = Not<IsBoolean<T>>;
export type IsTrue<T> = Extends<T, true>;
export type IsFalse<T> = Extends<T, false>;
export type IsStaticBoolean<T> = Or<IsTrue<T>, IsFalse<T>>;
export type IsDynamicBoolean<T> = And3<IsBoolean<T>, Not<IsTrue<T>>, Not<IsFalse<T>>>;

export type IsString<T> = Extends<T, string>;
export type NotString<T> = Not<IsString<T>>;
export type IsEmptyString<T> = Extends<T, "">;

export type IsFunction<T> = Extends<T, Function>;
export type NotFunction<T> = Not<IsFunction<T>>;

export type IsSymbol<T> = Extends<T, Symbol>;
export type NotSymbol<T> = Not<IsSymbol<T>>;

export type IsNumber<T> = Extends<T, number>;
export type NotNumber<T> = Not<IsNumber<T>>;
export type IsZero<T> = Extends<T, 0>;
export type IsOne<T> = Extends<T, 1>;

export type IsUndefined<T> = Extends<T, undefined>;
export type NotUndefined<T> = Not<IsUndefined<T>>;

export type IsNever<T> = Extends<[T], [never]>;
export type NotNever<T> = Not<IsNever<T>>;

export type IsVoid<T> = Extends<T, void>;
export type NotVoid<T> = Not<IsVoid<T>>;

export type IsAny<T> = Extends<T, any>;
export type NotAny<T> = Not<IsAny<T>>;
