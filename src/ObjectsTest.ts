// tslint:disable:no-namespace

import { AssertTrue } from "./Assertions";
import { FunctionPropertyNames, PropertyNames, PropertyNamesNotOfType, PropertyNamesOfType, PropertiesOfType } from "./Objects";
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

namespace PropertyNamesNotOfTypeTest {
    let _test1: AssertTrue<Eq<
        PropertyNamesNotOfType<{ ok: boolean; name: string; onclick: () => void; member(): void; }, boolean | string>,
        "onclick" | "member">>;
}

namespace PropertiesOfTypeTest {
    let _test1: AssertTrue<Eq<
        PropertiesOfType<{ ok: boolean; name: string; onclick: () => void; member(): void; }, boolean | string>,
        { ok: boolean; name: string; }>>;
}
namespace FunctionPropertyNamesTest {
    let _test1: AssertTrue<Eq<
        FunctionPropertyNames<{ name: string; onclick: () => void; member(): void; }>,
        "onclick" | "member">>;
}