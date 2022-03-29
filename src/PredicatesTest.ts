// tslint:disable:no-namespace

import { AssertFalse, AssertTrue } from "./Assertions";
import { And, Eq, Extends, Not, Or } from "./Predicates";
import { IsBoolean, IsString } from "./PrimitiveTypes";

type ABC = "a" | "b" | "c";
type AB = "a" | "b";

export namespace ExtendsTest {
    type Test<X, Y> = Extends<X, Y>;

    export let _booleanBoolean: AssertTrue<Test<boolean, boolean>>;
    // TODO
    // let _booleanFalse: AssertFalse<Test<boolean, false>>;
    // let _booleanTrue: AssertFalse<Test<boolean, true>>;
    export let _trueBoolean: AssertTrue<Test<true, boolean>>;
    export let _falseBoolean: AssertTrue<Test<false, boolean>>;
    export let _trueTrue: AssertTrue<Test<true, true>>;
}

export namespace OrTest {
    type Test<T> = Or<IsBoolean<T>, IsString<T>>;

    export let _boolean: AssertTrue<Test<boolean>>;
    export let _string: AssertTrue<Test<string>>;
    export let _number: AssertFalse<Test<number>>;
    export let _object: AssertFalse<Test<object>>;
}

export namespace AndTest {
    type Test<T> = And<Extends<T, ABC>, Extends<T, AB>>;

    export let _a: AssertTrue<Test<"a">>;
    export let _b: AssertTrue<Test<"b">>;
    export let _c: AssertFalse<Test<"c">>;
    export let _d: AssertFalse<Test<"d">>;
}

export namespace NotTest {
    type Test<T> = Not<IsBoolean<T>>;

    export let _boolean: AssertFalse<Test<boolean>>;
    export let _string: AssertTrue<Test<string>>;
    export let _number: AssertTrue<Test<number>>;
    export let _object: AssertTrue<Test<object>>;

    export let _true: AssertFalse<Test<true>>;
    export let _false: AssertFalse<Test<false>>;
    export let _a: AssertTrue<Test<"a">>;
    export let _5: AssertTrue<Test<5>>;
}

export namespace EqTest {
    type Test<X, Y> = Eq<X, Y>;

    export let _nevers: AssertTrue<Test<never, never>>;
    export let _booleans: AssertTrue<Test<boolean, boolean>>;
    export let _strings: AssertTrue<Test<string, string>>;
    export let _undefineds: AssertTrue<Test<undefined, undefined>>;
    export let _functions: AssertTrue<Test<Function, Function>>;
    export let _objects: AssertTrue<Test<object, object>>;
    export let _voids: AssertTrue<Test<void, void>>;

    export let _booleanString: AssertFalse<Test<boolean, string>>;
    export let _booleanUndefined: AssertFalse<Test<boolean, undefined>>;
    export let _booleanNever: AssertFalse<Test<boolean, never>>;
    export let _undefined1: AssertFalse<Test<undefined, 1>>;
    export let _undefinedVoid: AssertFalse<Test<undefined, void>>;

    // TODO
    // let _booleanTrue: AssertFalse<Test<boolean, true>>;
    // let _abcAb: AssertFalse<Test<ABC, AB>>;
    // let _abAbc: AssertFalse<Test<AB, ABC>>;
}

// Some very special TS type.
export namespace TrueAndFalseTest {
    type TF = true & false;

    export let _boolean: AssertFalse<Eq<TF, boolean>>;
    export let _string: AssertFalse<Eq<TF, string>>;
    export let _number: AssertFalse<Eq<TF, number>>;
    export let _object: AssertFalse<Eq<TF, object>>;
    export let _undefined: AssertFalse<Eq<TF, undefined>>;
    export let _void: AssertFalse<Eq<TF, void>>;
    // TODO: not sure what goes on here.
    export let _never: AssertFalse<Eq<TF, never>>;

    export let _true: AssertFalse<Eq<TF, true>>;
    export let _false: AssertFalse<Eq<TF, false>>;
    export let _a: AssertFalse<Eq<TF, "a">>;
    export let _5: AssertFalse<Eq<TF, 5>>;
}
