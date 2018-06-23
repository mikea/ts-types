// A Predicate is a type that statically evaluates to true or never.

export type True = true;
export type False = false;

// X extends Y
export type Extends<X, Y> = X extends Y ? True : False;

// Type equality that doesn't work for never
export type StrictEq<X, Y> = And<Extends<X, Y>, Extends<Y, X>>;

export type Eq<X, Y> = StrictEq<X, Y>;

// If expression
export type If<Condition, Then, Else> = Condition extends True ? Then : Else;

// Logical And
export type And<P1, P2> = If<P1, P2, False>;

// Logical Or
export type Or<P1, P2> = If<P1, True, P2>;

// Logical Not
export type Not<P> = If<P, False, True>;
