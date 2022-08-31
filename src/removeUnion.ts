export type Letters = "a" | "b" | "c";

type RemoveC<TType> = TType extends "c" ? never : TType;

export type WithoutC = RemoveC<Letters>;
