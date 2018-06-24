// Type filters are generic types that resolve to a type (success) or to never (failure)

// Exclude from T those types that are assignable to U
// comes from lib.d.ts
export type Exclude<T, U> = T extends U ? never : T;

// Extract from T those types that are assignable to U
// comes from lib.d.ts
export type Extract<T, U> = T extends U ? T : never;

// Exclude null and undefined from T
// comes from lib.d.ts
export type NonNullable<T> = T extends null | undefined ? never : T;
