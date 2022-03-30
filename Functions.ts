// replaces return type with a given type.
export type ReplaceReturnType<P extends Function, NewReturnType> = P extends () => any
    ? () => NewReturnType
    : P extends (arg: infer A) => any
    ? (arg: A) => NewReturnType
    : P extends (arg1: infer A1, arg2: infer A2) => any
    ? (arg1: A1, arg2: A2) => NewReturnType
    : P extends (arg1: infer A1, arg2: infer A2, arg3: infer A3) => any
    ? (arg1: A1, arg2: A2, arg3: A3) => NewReturnType
    : P extends (arg1: infer A1, arg2: infer A2, arg3: infer A3, arg4: infer A4) => any
    ? (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => NewReturnType
    : never;
