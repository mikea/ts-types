export type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends symbol ? "symbol" :
    T extends void ? "void" :
    T extends Function ? "function" :
    [T] extends [never] ? "never" :
    T extends null ? "null" :
    "object";
