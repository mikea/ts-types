// Assertion<T> resolves to never (success) or doesn't exist (assertion failure)

export type AssertTrue<T extends true, message = ""> = never;

export type AssertFalse<T extends false, message = ""> = never;

// export type AssertBoolean<T extends boolean, message = ""> = never;
