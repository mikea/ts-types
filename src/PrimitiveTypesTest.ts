// tslint:disable:no-namespace

import { AssertFalse, AssertTrue } from "./Assertions";
import { IsArray, IsBoolean, IsDynamicBoolean, IsNever, IsNumber, IsStaticBoolean, IsString, IsUndefined, IsVoid } from "./PrimitiveTypes";

enum Fruits {
    APPLE = "apple",
    ORANGE = "orange",
}

enum HttpCodes {
    OK = 200,
    NOT_FOUNT = 404,
}

namespace IsNumberTest {
    type Test<T> = IsNumber<T>;

    type _number = AssertTrue<Test<number>>;
    type _boolean = AssertFalse<Test<boolean>>;
    type _string = AssertFalse<Test<string>>;
    type _symbol = AssertFalse<Test<symbol>>;
    type _void = AssertFalse<Test<void>>;
    type _undefined = AssertFalse<Test<undefined>>;
    type _never = AssertFalse<Test<never>>;
    type _function = AssertFalse<Test<Function>>;
    type _fruits = AssertFalse<Test<Fruits>>;
    type _http_codes = AssertTrue<Test<HttpCodes>>;

    type _5 = AssertTrue<Test<5>>;
    type _56 = AssertTrue<Test<5 | 6>>;
    // TODO
    // type _5a = AssertFalse<Test<5 | "a">>;
    type _true = AssertFalse<Test<true>>;
    type _false = AssertFalse<Test<false>>;
    type _a = AssertFalse<Test<"a">>;
    type _apple = AssertFalse<Test<Fruits.APPLE>>;
    type _ok = AssertTrue<Test<HttpCodes.OK>>;

    // TODO
    // let _booleanOrString: AssertTrue<Test<boolean | string>>;
}

namespace IsBooleanTest {
    type Test<T> = IsBoolean<T>;

    type _number = AssertFalse<Test<number>>;
    type _boolean = AssertTrue<Test<boolean>>;
    type _string = AssertFalse<Test<string>>;
    type _symbol = AssertFalse<Test<symbol>>;
    type _void = AssertFalse<Test<void>>;
    type _undefined = AssertFalse<Test<undefined>>;
    type _never = AssertFalse<Test<never>>;
    type _function = AssertFalse<Test<Function>>;
    type _fruits = AssertFalse<Test<Fruits>>;
    type _http_codes = AssertFalse<Test<HttpCodes>>;

    type _true = AssertTrue<Test<true>>;
    type _false = AssertTrue<Test<false>>;
    type _a = AssertFalse<Test<"a">>;
    type _5 = AssertFalse<Test<5>>;

    // TODO
    // let _booleanOrString: AssertTrue<Test<boolean | string>>;
}

namespace IsStaticBooleanTest {
    type Test<T> = IsStaticBoolean<T>;

    // TODO
    // type _boolean = AssertFalse<Test<boolean>>;
    type _number = AssertFalse<Test<number>>;
    type _string = AssertFalse<Test<string>>;
    type _symbol = AssertFalse<Test<symbol>>;
    type _void = AssertFalse<Test<void>>;
    type _undefined = AssertFalse<Test<undefined>>;
    type _never = AssertFalse<Test<never>>;
    type _function = AssertFalse<Test<Function>>;
    type _fruits = AssertFalse<Test<Fruits>>;
    type _http_codes = AssertFalse<Test<HttpCodes>>;

    type _true = AssertTrue<Test<true>>;
    type _false = AssertTrue<Test<false>>;
    type _a = AssertFalse<Test<"a">>;
    type _5 = AssertFalse<Test<5>>;
}

namespace IsDynamicBooleanTest {
    type Test<T> = IsDynamicBoolean<T>;

    // TODO
    // type _boolean = AssertTrue<Test<boolean>>;
    type _number = AssertFalse<Test<number>>;
    type _string = AssertFalse<Test<string>>;
    type _symbol = AssertFalse<Test<symbol>>;
    type _void = AssertFalse<Test<void>>;
    type _undefined = AssertFalse<Test<undefined>>;
    type _never = AssertFalse<Test<never>>;
    type _function = AssertFalse<Test<Function>>;
    type _fruits = AssertFalse<Test<Fruits>>;
    type _http_codes = AssertFalse<Test<HttpCodes>>;

    type _true = AssertFalse<Test<true>>;
    type _false = AssertFalse<Test<false>>;
    type _a = AssertFalse<Test<"a">>;
    type _5 = AssertFalse<Test<5>>;

    // TODO
    // type _boolean = AssertFalse<Test<boolean>>;
    // let _booleanOrString: AssertTrue<Test<boolean | string>>;
}


namespace IsStringTest {
    type Test<T> = IsString<T>;

    type _number = AssertFalse<Test<number>>;
    type _boolean = AssertFalse<Test<boolean>>;
    type _string = AssertTrue<Test<string>>;
    type _symbol = AssertFalse<Test<symbol>>;
    type _void = AssertFalse<Test<void>>;
    type _undefined = AssertFalse<Test<undefined>>;
    type _never = AssertFalse<Test<never>>;
    type _function = AssertFalse<Test<Function>>;
    type _fruits = AssertTrue<Test<Fruits>>;
    type _http_codes = AssertFalse<Test<HttpCodes>>;

    let _true: AssertFalse<Test<true>>;
    let _false: AssertFalse<Test<false>>;
    let _a: AssertTrue<Test<"a">>;
    let _5: AssertFalse<Test<5>>;

    // TODO
    // let _booleanOrString: AssertTrue<Test<boolean | string>>;
}

namespace IsNeverTest {
    type Test<T> = IsNever<T>;

    type _number = AssertFalse<Test<number>>;
    type _boolean = AssertFalse<Test<boolean>>;
    type _string = AssertFalse<Test<string>>;
    type _symbol = AssertFalse<Test<symbol>>;
    type _void = AssertFalse<Test<void>>;
    type _undefined = AssertFalse<Test<undefined>>;
    type _never = AssertTrue<Test<never>>;
    type _function = AssertFalse<Test<Function>>;
    type _fruits = AssertFalse<Test<Fruits>>;
    type _http_codes = AssertFalse<Test<HttpCodes>>;

    let _true: AssertFalse<Test<true>>;
    let _false: AssertFalse<Test<false>>;
    let _a: AssertFalse<Test<"a">>;
    let _5: AssertFalse<Test<5>>;
}


namespace IsVoidTest {
    type Test<T> = IsVoid<T>;

    type _number = AssertFalse<Test<number>>;
    type _boolean = AssertFalse<Test<boolean>>;
    type _string = AssertFalse<Test<string>>;
    type _symbol = AssertFalse<Test<symbol>>;
    type _void = AssertTrue<Test<void>>;
    // TODO ?
    // type _undefined = AssertFalse<Test<undefined>>;
    type _never = AssertFalse<Test<never>>;
    type _function = AssertFalse<Test<Function>>;
    type _fruits = AssertFalse<Test<Fruits>>;
    type _http_codes = AssertFalse<Test<HttpCodes>>;

    const _true: Test<true> = false;
    const _false: Test<false> = false;
    const _a: Test<"a"> = false;
    const _5: Test<5> = false;
}

namespace IsUndefinedTest {
    type Test<T> = IsUndefined<T>;

    type _number = AssertFalse<Test<number>>;
    type _boolean = AssertFalse<Test<boolean>>;
    type _string = AssertFalse<Test<string>>;
    type _symbol = AssertFalse<Test<symbol>>;
    type _void = AssertFalse<Test<void>>;
    type _undefined = AssertTrue<Test<undefined>>;
    type _never = AssertTrue<Test<never>>;
    type _function = AssertFalse<Test<Function>>;
    type _fruits = AssertFalse<Test<Fruits>>;
    type _http_codes = AssertFalse<Test<HttpCodes>>;

    let _true: AssertFalse<Test<true>>;
    let _false: AssertFalse<Test<false>>;
    let _a: AssertFalse<Test<"a">>;
    let _5: AssertFalse<Test<5>>;
}

namespace IsArrayTest {
    type _number = AssertFalse<IsArray<number>>;
    type _boolean = AssertFalse<IsArray<boolean>>;
    type _string = AssertFalse<IsArray<string>>;
    type _symbol = AssertFalse<IsArray<symbol>>;
    type _void = AssertFalse<IsArray<void>>;
    type _undefined = AssertFalse<IsArray<undefined>>;
    type _never = AssertFalse<IsArray<never>>;
    type _function = AssertFalse<IsArray<Function>>;
    type _fruits = AssertFalse<IsArray<Fruits>>;
    type _http_codes = AssertFalse<IsArray<HttpCodes>>;

    type _booleanArray = AssertTrue<IsArray<boolean[]>>;
}
