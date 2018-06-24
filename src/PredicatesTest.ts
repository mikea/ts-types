// tslint:disable:no-namespace

import { AssertFalse, AssertTrue } from "./Assertions";
import { And, Eq, Extends, Not, Or } from "./Predicates";
import { IsBoolean, IsString } from "./PrimitiveTypes";

type ABC = "a" | "b" | "c";
type AB = "a" | "b";

namespace ExtendsTest {
    type Test<X, Y> = Extends<X, Y>;

    let _booleanBoolean: AssertTrue<Test<boolean, boolean>>;
    // TODO
    // let _booleanFalse: AssertFalse<Test<boolean, false>>;
    // let _booleanTrue: AssertFalse<Test<boolean, true>>;
    let _trueBoolean: AssertTrue<Test<true, boolean>>;
    let _falseBoolean: AssertTrue<Test<false, boolean>>;
    let _trueTrue: AssertTrue<Test<true, true>>;
}

namespace OrTest {
    type Test<T> = Or<IsBoolean<T>, IsString<T>>;

    let _boolean: AssertTrue<Test<boolean>>;
    let _string: AssertTrue<Test<string>>;
    let _number: AssertFalse<Test<number>>;
    let _object: AssertFalse<Test<object>>;
}

namespace AndTest {
    type Test<T> = And<Extends<T, ABC>, Extends<T, AB>>;

    let _a: AssertTrue<Test<"a">>;
    let _b: AssertTrue<Test<"b">>;
    let _c: AssertFalse<Test<"c">>;
    let _d: AssertFalse<Test<"d">>;
}

namespace NotTest {
    type Test<T> = Not<IsBoolean<T>>;

    let _boolean: AssertFalse<Test<boolean>>;
    let _string: AssertTrue<Test<string>>;
    let _number: AssertTrue<Test<number>>;
    let _object: AssertTrue<Test<object>>;

    let _true: AssertFalse<Test<true>>;
    let _false: AssertFalse<Test<false>>;
    let _a: AssertTrue<Test<"a">>;
    let _5: AssertTrue<Test<5>>;
}

namespace EqTest {
    type Test<X, Y> = Eq<X, Y>;

    let _nevers: AssertTrue<Test<never, never>>;
    let _booleans: AssertTrue<Test<boolean, boolean>>;
    let _strings: AssertTrue<Test<string, string>>;
    let _undefineds: AssertTrue<Test<undefined, undefined>>;
    let _functions: AssertTrue<Test<Function, Function>>;
    let _objects: AssertTrue<Test<object, object>>;
    let _voids: AssertTrue<Test<void, void>>;

    let _booleanString: AssertFalse<Test<boolean, string>>;
    let _booleanUndefined: AssertFalse<Test<boolean, undefined>>;
    let _booleanNever: AssertFalse<Test<boolean, never>>;
    let _undefined1: AssertFalse<Test<undefined, 1>>;
    let _undefinedVoid: AssertFalse<Test<undefined, void>>;

    // TODO
    // let _booleanTrue: AssertFalse<Test<boolean, true>>;
    // let _abcAb: AssertFalse<Test<ABC, AB>>;
    // let _abAbc: AssertFalse<Test<AB, ABC>>;
}

// Some very special TS type.
namespace TrueAndFalseTest {
    type TF = true & false;

    let _boolean: AssertFalse<Eq<TF, boolean>>;
    let _string: AssertFalse<Eq<TF, string>>;
    let _number: AssertFalse<Eq<TF, number>>;
    let _object: AssertFalse<Eq<TF, object>>;
    let _undefined: AssertFalse<Eq<TF, undefined>>;
    let _void: AssertFalse<Eq<TF, void>>;
    // TODO: not sure what goes on here.
    let _never: AssertFalse<Eq<TF, never>>;

    let _true: AssertFalse<Eq<TF, true>>;
    let _false: AssertFalse<Eq<TF, false>>;
    let _a: AssertFalse<Eq<TF, "a">>;
    let _5: AssertFalse<Eq<TF, 5>>;
}