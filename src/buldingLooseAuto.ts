type IconSize = LooseAuto<"xs" | "sm">;

type LooseAuto<T extends string> = T | Omit<string, T>;

const icon: IconSize = "sm";
