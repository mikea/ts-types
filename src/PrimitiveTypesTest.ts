// tslint:disable:no-namespace

import { AssertFalse, AssertTrue } from "./Assertions";
import {
    IsBoolean,
    IsDynamicBoolean,
    IsNever,
    IsNumber,
    IsStaticBoolean,
    IsString,
    IsUndefined,
    IsVoid,
} from "./PrimitiveTypes";

enum Fruits {
    APPLE = "apple",
    ORANGE = "orange",
}

enum HttpCodes {
    OK = 200,
    NOT_FOUNT = 404,
}

export namespace IsNumberTest {
    type Test<T> = IsNumber<T>;

    export type _number = AssertTrue<Test<number>>;
    export type _boolean = AssertFalse<Test<boolean>>;
    export type _string = AssertFalse<Test<string>>;
    export type _symbol = AssertFalse<Test<symbol>>;
    export type _void = AssertFalse<Test<void>>;
    export type _undefined = AssertFalse<Test<undefined>>;
    export type _never = AssertFalse<Test<never>>;
    export type _function = AssertFalse<Test<Function>>;
    export type _fruits = AssertFalse<Test<Fruits>>;
    export type _http_codes = AssertTrue<Test<HttpCodes>>;

    export type _5 = AssertTrue<Test<5>>;
    export type _56 = AssertTrue<Test<5 | 6>>;
    // TODO
    // type _5a = AssertFalse<Test<5 | "a">>;
    export type _true = AssertFalse<Test<true>>;
    export type _false = AssertFalse<Test<false>>;
    export type _a = AssertFalse<Test<"a">>;
    export type _apple = AssertFalse<Test<Fruits.APPLE>>;
    export type _ok = AssertTrue<Test<HttpCodes.OK>>;

    // TODO
    // let _booleanOrString: AssertTrue<Test<boolean | string>>;
}

export namespace IsBooleanTest {
    type Test<T> = IsBoolean<T>;

    export type _number = AssertFalse<Test<number>>;
    export type _boolean = AssertTrue<Test<boolean>>;
    export type _string = AssertFalse<Test<string>>;
    export type _symbol = AssertFalse<Test<symbol>>;
    export type _void = AssertFalse<Test<void>>;
    export type _undefined = AssertFalse<Test<undefined>>;
    export type _never = AssertFalse<Test<never>>;
    export type _function = AssertFalse<Test<Function>>;
    export type _fruits = AssertFalse<Test<Fruits>>;
    export type _http_codes = AssertFalse<Test<HttpCodes>>;

    export type _true = AssertTrue<Test<true>>;
    export type _false = AssertTrue<Test<false>>;
    export type _a = AssertFalse<Test<"a">>;
    export type _5 = AssertFalse<Test<5>>;

    // TODO
    // let _booleanOrString: AssertTrue<Test<boolean | string>>;
}

export namespace IsStaticBooleanTest {
    type Test<T> = IsStaticBoolean<T>;

    // TODO
    // type _boolean = AssertFalse<Test<boolean>>;
    export type _number = AssertFalse<Test<number>>;
    export type _string = AssertFalse<Test<string>>;
    export type _symbol = AssertFalse<Test<symbol>>;
    export type _void = AssertFalse<Test<void>>;
    export type _undefined = AssertFalse<Test<undefined>>;
    export type _never = AssertFalse<Test<never>>;
    export type _function = AssertFalse<Test<Function>>;
    export type _fruits = AssertFalse<Test<Fruits>>;
    export type _http_codes = AssertFalse<Test<HttpCodes>>;

    export type _true = AssertTrue<Test<true>>;
    export type _false = AssertTrue<Test<false>>;
    export type _a = AssertFalse<Test<"a">>;
    export type _5 = AssertFalse<Test<5>>;
}

export namespace IsDynamicBooleanTest {
    type Test<T> = IsDynamicBoolean<T>;

    // TODO
    // type _boolean = AssertTrue<Test<boolean>>;
    export type _number = AssertFalse<Test<number>>;
    export type _string = AssertFalse<Test<string>>;
    export type _symbol = AssertFalse<Test<symbol>>;
    export type _void = AssertFalse<Test<void>>;
    export type _undefined = AssertFalse<Test<undefined>>;
    export type _never = AssertFalse<Test<never>>;
    export type _function = AssertFalse<Test<Function>>;
    export type _fruits = AssertFalse<Test<Fruits>>;
    export type _http_codes = AssertFalse<Test<HttpCodes>>;

    export type _true = AssertFalse<Test<true>>;
    export type _false = AssertFalse<Test<false>>;
    export type _a = AssertFalse<Test<"a">>;
    export type _5 = AssertFalse<Test<5>>;

    // TODO
    // type _boolean = AssertFalse<Test<boolean>>;
    // let _booleanOrString: AssertTrue<Test<boolean | string>>;
}

export namespace IsStringTest {
    type Test<T> = IsString<T>;

    export type _number = AssertFalse<Test<number>>;
    export type _boolean = AssertFalse<Test<boolean>>;
    export type _string = AssertTrue<Test<string>>;
    export type _symbol = AssertFalse<Test<symbol>>;
    export type _void = AssertFalse<Test<void>>;
    export type _undefined = AssertFalse<Test<undefined>>;
    export type _never = AssertFalse<Test<never>>;
    export type _function = AssertFalse<Test<Function>>;
    export type _fruits = AssertTrue<Test<Fruits>>;
    export type _http_codes = AssertFalse<Test<HttpCodes>>;

    export let _true: AssertFalse<Test<true>>;
    export let _false: AssertFalse<Test<false>>;
    export let _a: AssertTrue<Test<"a">>;
    export let _5: AssertFalse<Test<5>>;

    // TODO
    // let _booleanOrString: AssertTrue<Test<boolean | string>>;
}

export namespace IsNeverTest {
    type Test<T> = IsNever<T>;

    export type _number = AssertFalse<Test<number>>;
    export type _boolean = AssertFalse<Test<boolean>>;
    export type _string = AssertFalse<Test<string>>;
    export type _symbol = AssertFalse<Test<symbol>>;
    export type _void = AssertFalse<Test<void>>;
    export type _undefined = AssertFalse<Test<undefined>>;
    export type _never = AssertTrue<Test<never>>;
    export type _function = AssertFalse<Test<Function>>;
    export type _fruits = AssertFalse<Test<Fruits>>;
    export type _http_codes = AssertFalse<Test<HttpCodes>>;

    export let _true: AssertFalse<Test<true>>;
    export let _false: AssertFalse<Test<false>>;
    export let _a: AssertFalse<Test<"a">>;
    export let _5: AssertFalse<Test<5>>;
}

export namespace IsVoidTest {
    type Test<T> = IsVoid<T>;

    export type _number = AssertFalse<Test<number>>;
    export type _boolean = AssertFalse<Test<boolean>>;
    export type _string = AssertFalse<Test<string>>;
    export type _symbol = AssertFalse<Test<symbol>>;
    export type _void = AssertTrue<Test<void>>;
    // TODO ?
    // type _undefined = AssertFalse<Test<undefined>>;
    export type _never = AssertFalse<Test<never>>;
    export type _function = AssertFalse<Test<Function>>;
    export type _fruits = AssertFalse<Test<Fruits>>;
    export type _http_codes = AssertFalse<Test<HttpCodes>>;

    export const _true: Test<true> = false;
    export const _false: Test<false> = false;
    export const _a: Test<"a"> = false;
    export const _5: Test<5> = false;
}

export namespace IsUndefinedTest {
    type Test<T> = IsUndefined<T>;

    export type _number = AssertFalse<Test<number>>;
    export type _boolean = AssertFalse<Test<boolean>>;
    export type _string = AssertFalse<Test<string>>;
    export type _symbol = AssertFalse<Test<symbol>>;
    export type _void = AssertFalse<Test<void>>;
    export type _undefined = AssertTrue<Test<undefined>>;
    export type _never = AssertTrue<Test<never>>;
    export type _function = AssertFalse<Test<Function>>;
    export type _fruits = AssertFalse<Test<Fruits>>;
    export type _http_codes = AssertFalse<Test<HttpCodes>>;

    export let _true: AssertFalse<Test<true>>;
    export let _false: AssertFalse<Test<false>>;
    export let _a: AssertFalse<Test<"a">>;
    export let _5: AssertFalse<Test<5>>;
}
