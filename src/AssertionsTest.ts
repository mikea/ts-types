// tslint:disable:no-namespace

import { AssertSuper, AssertTrue } from "./Assertions";

namespace AssertTrueTest {
    type _true = AssertTrue<true>;
    type _trueWithMessage = AssertTrue<true, "should be true">;

    // all these should fail:
    // type _false = AssertTrue<false>;
    // TODO
    type _never = AssertTrue<never>;
}

namespace AssertSuperTest {
    type _booleanTrue = AssertSuper<boolean, true>;
}