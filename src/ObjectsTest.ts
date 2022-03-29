// tslint:disable:no-namespace

import { AssertTrue } from "./Assertions";
import {
    FunctionPropertyNames,
    PropertiesOfType,
    PropertyNames,
    PropertyNamesNotOfType,
    PropertyNamesOfType,
    PropertyTypes,
    WithProperty,
} from "./Objects";
import { Eq } from "./Predicates";

export namespace PropertyNamesTest {
    export let _test1: AssertTrue<
        Eq<PropertyNames<{ name: string; onclick: () => void; member(): void }>, "name" | "onclick" | "member">
    >;
}

export namespace PropertyTypesTest {
    export let _test1: AssertTrue<
        Eq<PropertyTypes<{ name: string; onclick: () => void; member(): void }>, string | (() => void)>
    >;
}
export namespace PropertyNamesOfTypeTest {
    export let _test1: AssertTrue<
        Eq<
            PropertyNamesOfType<{ ok: boolean; name: string; onclick: () => void; member(): void }, boolean | string>,
            "name" | "ok"
        >
    >;
}

export namespace PropertyNamesNotOfTypeTest {
    export let _test1: AssertTrue<
        Eq<
            PropertyNamesNotOfType<
                { ok: boolean; name: string; onclick: () => void; member(): void },
                boolean | string
            >,
            "onclick" | "member"
        >
    >;
}

export namespace PropertiesOfTypeTest {
    export let _test1: AssertTrue<
        Eq<
            PropertiesOfType<{ ok: boolean; name: string; onclick: () => void; member(): void }, boolean | string>,
            { ok: boolean; name: string }
        >
    >;
}
export namespace FunctionPropertyNamesTest {
    export let _test1: AssertTrue<
        Eq<FunctionPropertyNames<{ name: string; onclick: () => void; member(): void }>, "onclick" | "member">
    >;
}

export namespace WithPropertyTest {
    export type _test = AssertTrue<Eq<{ name: string }, WithProperty<"name", string>>>;
}
