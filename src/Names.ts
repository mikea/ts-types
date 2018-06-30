// as precise type name as possible.
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
    T extends any[] ? "array" :
    T extends object ? "object" :
    "error_should_never_happens"
    ;

// also handles common values of value types, useful for debugging.
export type DebugTypeName<T> =
    T extends true ? "true" :
    T extends false ? "false" :
    T extends 0 ? "0" :
    T extends 1 ? "1" :
    T extends "" ? "\"\"" :
    TypeName<T>
    ;