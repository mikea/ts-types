import { IsBoolean } from "./PrimitiveTypes";
import { Eq } from "./Predicates";
import { FunctionPropertyNames } from "./Objects";

module FunctionPropertyNames {
    const _test1: Eq<
        FunctionPropertyNames<{
            onclick: () => void;
            member(): void;
        }>,
        "onclick" | "member"> = true;

    type t = FunctionPropertyNames<{
        onclick: () => void;
        member(): void;
    }>;
    const _test2: Eq<
        t,
        "onclick"> = true;
}