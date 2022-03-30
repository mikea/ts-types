// If expression
export type If<Condition, Then, Else> = Condition extends true ? Then : Else;
