// tslint:disable:no-namespace

import { ElementType, IsArray } from "./Arrays";
import { AssertFalse, AssertTrue } from "./Assertions";
import { Eq } from "./Predicates";

namespace IsArrayTest {
    type _number = AssertFalse<IsArray<number>>;
    type _boolean = AssertFalse<IsArray<boolean>>;
    type _string = AssertFalse<IsArray<string>>;
    type _symbol = AssertFalse<IsArray<symbol>>;
    type _void = AssertFalse<IsArray<void>>;
    type _undefined = AssertFalse<IsArray<undefined>>;
    type _never = AssertFalse<IsArray<never>>;
    type _function = AssertFalse<IsArray<Function>>;

    type _booleanArray = AssertTrue<IsArray<boolean[]>>;
}

namespace ElementTypeTest {
    type _booleanArray = AssertTrue<Eq<
        ElementType<boolean[]>,
        boolean>>;
}
