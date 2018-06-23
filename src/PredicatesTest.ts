import { And, Extends, Not, Or, StrictEq, Eq } from "./Predicates";
import { IsBoolean, IsString } from "./PrimitiveTypes";

type ABC = "a" | "b" | "c";
type AB = "a" | "b";

module OrTest {
    type BooleanOrString<T> = Or<IsBoolean<T>, IsString<T>>;

    const _boolean: BooleanOrString<boolean> = true;
    const _string: BooleanOrString<string> = true;
    const _number: BooleanOrString<number> = false;
    const _object: BooleanOrString<object> = false;
}

module AndTest {
    type Test<T> = And<Extends<T, ABC>, Extends<T, AB>>;

    const _a: Test<"a"> = true;
    const _b: Test<"b"> = true;
    const _c: Test<"c"> = false;
    const _d: Test<"d"> = false;
}

module NotTest {
    type Test<T> = Not<IsBoolean<T>>;

    const _boolean: Test<boolean> = false;
    const _string: Test<string> = true;
    const _number: Test<number> = true;
    const _object: Test<object> = true;

    const _true: Test<true> = false;
    const _false: Test<false> = false;
    const _a: Test<"a"> = true;
    const _5: Test<5> = true;
}


module StrictEqTest {
    type Test<X, Y> = StrictEq<X, Y>;

    // TODO
    // const _nevers: Test<never, never> = true;
    const _booleans: Test<boolean, boolean> = true;
    const _strings: Test<string, string> = true;
    const _undefineds: Test<undefined, undefined> = true;
    const _functions: Test<Function, Function> = true;
    const _objects: Test<object, object> = true;
    const _voids: Test<void, void> = true;

    const _booleanString: Test<boolean, string> = false;
    const _booleanUndefined: Test<boolean, undefined> = false;
    const _booleanNever: Test<boolean, never> = false;
    const _booleanTrue: Test<boolean, true> = false;

    const _undefined1: Test<undefined, 1> = false;
    const _undefinedVoid: Test<undefined, void> = false;
}

module EqTest {
    type Test<X, Y> = Eq<X, Y>;

    // TODO
    // const _nevers: Test<never, never> = true;

    const _booleans: Test<boolean, boolean> = true;
    const _strings: Test<string, string> = true;
    const _undefineds: Test<undefined, undefined> = true;
    const _functions: Test<Function, Function> = true;
    const _objects: Test<object, object> = true;
    const _voids: Test<void, void> = true;

    const _booleanString: Test<boolean, string> = false;
    const _booleanUndefined: Test<boolean, undefined> = false;
    const _booleanNever: Test<boolean, never> = false;

    const _abcAb: Test<ABC, AB> = false;
    const _abAbc: Test<AB, ABC> = false;
}