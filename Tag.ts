import { WithProperty } from "./Objects";

// Tags let you store type information in a field and extract it back.

export type WithTag<Name extends string, T> = Partial<WithProperty<Name, { tag: T }>>;

export type GetTag<Name extends string, T extends WithTag<Name, unknown>> = NonNullable<T[Name]>["tag"];
