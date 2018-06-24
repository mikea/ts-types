import { AssertTrue } from "./Assertions";
import { Eq } from "./Predicates";
import { TypeName } from "./TypeName";

// tslint:disable:no-namespace

enum Fruits {
    APPLE = "apple",
    ORANGE = "orange",
}

enum HttpCodes {
    OK = 200,
    NOT_FOUNT = 404,
}

interface IPerson { age: number; name: string }

namespace TypeNameTestTest {
    type Test<T, Name> = Eq<TypeName<T>, Name>;

    type _number = AssertTrue<Test<number, "number">>;
    type _boolean = AssertTrue<Test<boolean, "boolean">>;
    type _string = AssertTrue<Test<string, "string">>;
    type _symbol = AssertTrue<Test<symbol, "symbol">>;
    type _void = AssertTrue<Test<void, "void">>;
    type _undefined = AssertTrue<Test<undefined, "undefined">>;
    type _never = AssertTrue<Test<never, "never">>;
    type _function = AssertTrue<Test<Function, "function">>;
    type _fruits = AssertTrue<Test<Fruits, "string">>;
    type _http_codes = AssertTrue<Test<HttpCodes, "number">>;
    type _person = AssertTrue<Test<IPerson, "object">>;

    type _5 = AssertTrue<Test<5, "number">>;
    type _56 = AssertTrue<Test<5 | 6, "number">>;
    type _5a = AssertTrue<Test<5 | "a", "string" | "number">>;
    type _true = AssertTrue<Test<true, "boolean">>;
    type _false = AssertTrue<Test<false, "boolean">>;
    type _a = AssertTrue<Test<"a", "string">>;
    type _apple = AssertTrue<Test<Fruits.APPLE, "string">>;
    type _ok = AssertTrue<Test<HttpCodes.OK, "number">>;
    type _null = AssertTrue<Test<null, "null">>;

    type t = Test<never, "never">;
}
