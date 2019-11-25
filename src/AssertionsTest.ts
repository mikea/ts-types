// tslint:disable:no-namespace

import { AssertSuper, AssertTrue } from "./Assertions";

export namespace AssertTrueTest {
    export type _true = AssertTrue<true>;
    export type _trueWithMessage = AssertTrue<true, "should be true">;

    // all these should fail:
    // type _false = AssertTrue<false>;
    // TODO
    export type _never = AssertTrue<never>;
}

export namespace AssertSuperTest {
    export type _booleanTrue = AssertSuper<boolean, true>;
}