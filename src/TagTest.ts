import { AssertTrue } from "./Assertions";
import { PropertyNames } from "./Objects";
import { Eq } from "./Predicates";
import { GetTag, WithTag } from "./Tag";

export namespace TagTest {
    type Descriptor<T> = { name: string } & WithTag<"t", T>;

    // having a tag shouldn't require new data.
    const stringDescription: Descriptor<string> = { name: "string" };

    export type _getTag = AssertTrue<Eq<string, GetTag<"t", typeof stringDescription>>>;

    // tag is present as property name
    export type _propertyNames = AssertTrue<Eq<"name" | "t", PropertyNames<typeof stringDescription>>>;
}
