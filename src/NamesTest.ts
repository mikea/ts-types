import { AssertTrue } from "./Assertions";
import { DebugTypeName, TypeName } from "./Names";
import { Eq } from "./Predicates";

// tslint:disable:no-namespace

enum Fruits {
    APPLE = "apple",
    ORANGE = "orange",
}

enum HttpCodes {
    OK = 200,
    NOT_FOUNT = 404,
}

interface IPerson {
    age: number;
    name: string;
}

export namespace TypeNameTest {
    type Test<T, Name> = Eq<TypeName<T>, Name>;

    export type _number = AssertTrue<Test<number, "number">>;
    export type _boolean = AssertTrue<Test<boolean, "boolean">>;
    export type _string = AssertTrue<Test<string, "string">>;
    export type _symbol = AssertTrue<Test<symbol, "symbol">>;
    export type _void = AssertTrue<Test<void, "void">>;
    export type _undefined = AssertTrue<Test<undefined, "undefined">>;
    export type _never = AssertTrue<Test<never, "never">>;
    export type _function = AssertTrue<Test<Function, "function">>;
    export type _fruits = AssertTrue<Test<Fruits, "string">>;
    export type _http_codes = AssertTrue<Test<HttpCodes, "number">>;
    export type _person = AssertTrue<Test<IPerson, "object">>;
    export type _booleanArray = AssertTrue<Test<boolean[], "array">>;

    export type _5 = AssertTrue<Test<5, "number">>;
    export type _56 = AssertTrue<Test<5 | 6, "number">>;
    export type _5a = AssertTrue<Test<5 | "a", "string" | "number">>;
    export type _true = AssertTrue<Test<true, "boolean">>;
    export type _false = AssertTrue<Test<false, "boolean">>;
    export type _a = AssertTrue<Test<"a", "string">>;
    export type _apple = AssertTrue<Test<Fruits.APPLE, "string">>;
    export type _ok = AssertTrue<Test<HttpCodes.OK, "number">>;
    export type _null = AssertTrue<Test<null, "null">>;
}

export namespace DebugTypeNameTest {
    type Test<T, Name> = Eq<DebugTypeName<T>, Name>;

    export type _number = AssertTrue<Test<number, "number">>;

    // TODO is "true" | "false"
    // type _boolean = AssertTrue<Test<boolean, "boolean">>;

    export type _string = AssertTrue<Test<string, "string">>;
    export type _symbol = AssertTrue<Test<symbol, "symbol">>;
    export type _void = AssertTrue<Test<void, "void">>;
    export type _undefined = AssertTrue<Test<undefined, "undefined">>;
    export type _never = AssertTrue<Test<never, "never">>;
    export type _function = AssertTrue<Test<Function, "function">>;
    export type _fruits = AssertTrue<Test<Fruits, "string">>;
    export type _http_codes = AssertTrue<Test<HttpCodes, "number">>;
    export type _person = AssertTrue<Test<IPerson, "object">>;
    export type _booleanArray = AssertTrue<Test<boolean[], "array">>;

    export type _0 = AssertTrue<Test<0, "0">>;
    export type _1 = AssertTrue<Test<1, "1">>;
    export type _5 = AssertTrue<Test<5, "number">>;
    export type _56 = AssertTrue<Test<5 | 6, "number">>;
    export type _5a = AssertTrue<Test<5 | "a", "string" | "number">>;
    export type _true = AssertTrue<Test<true, "true">>;
    export type _false = AssertTrue<Test<false, "false">>;
    export type _empty = AssertTrue<Test<"", '""'>>;
    export type _a = AssertTrue<Test<"a", "string">>;
    export type _apple = AssertTrue<Test<Fruits.APPLE, "string">>;
    export type _ok = AssertTrue<Test<HttpCodes.OK, "number">>;
    export type _null = AssertTrue<Test<null, "null">>;

    export type t = Test<never, "never">;
}
