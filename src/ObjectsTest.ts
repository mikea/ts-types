// tslint:disable:no-namespace

import { AssertTrue } from "./Assertions";
import { FunctionPropertyNames, PropertyNames, PropertyNamesOfType } from "./Objects";
import { Eq } from "./Predicates";


namespace PropertyNamesTest {
    let _test1: AssertTrue<Eq<
        PropertyNames<{ name: string; onclick: () => void; member(): void; }>,
        "name" | "onclick" | "member">>;
}

namespace PropertyNamesOfTypeTest {
    let _test1: AssertTrue<Eq<
        PropertyNamesOfType<{ ok: boolean; name: string; onclick: () => void; member(): void; }, boolean | string>,
        "name" | "ok">>;
}

namespace FunctionPropertyNamesTest {
    let _test1: AssertTrue<Eq<
        FunctionPropertyNames<{ name: string; onclick: () => void; member(): void; }>,
        "onclick" | "member">>;
}