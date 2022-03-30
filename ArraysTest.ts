// tslint:disable:no-namespace

import { ElementType, IsArray } from "./Arrays";
import { AssertFalse, AssertTrue } from "./Assertions";
import { Eq } from "./Predicates";

export namespace IsArrayTest {
    export type _number = AssertFalse<IsArray<number>>;
    export type _boolean = AssertFalse<IsArray<boolean>>;
    export type _string = AssertFalse<IsArray<string>>;
    export type _symbol = AssertFalse<IsArray<symbol>>;
    export type _void = AssertFalse<IsArray<void>>;
    export type _undefined = AssertFalse<IsArray<undefined>>;
    export type _never = AssertFalse<IsArray<never>>;
    export type _function = AssertFalse<IsArray<Function>>;

    export type _booleanArray = AssertTrue<IsArray<boolean[]>>;
}

export namespace ElementTypeTest {
    export type _booleanArray = AssertTrue<Eq<ElementType<boolean[]>, boolean>>;
}
