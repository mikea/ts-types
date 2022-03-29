// Assertion<T> resolves to never (success) or doesn't exist (assertion failure)

// X supertype of Y
export type AssertSuper<X, _Y extends X, _message = ""> = never;

export type AssertTrue<_T extends true, _message = ""> = never;

export type AssertFalse<_T extends false, _message = ""> = never;

// doesn't compile
// export type AssertEq<X, Y> = AssertTrue<Eq<X, Y>>;
