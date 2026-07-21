type ClassValue = string | number | null | false | undefined | ClassValue[];

function flatten(values: ClassValue[]): string[] {
  return values.flatMap((v) => {
    if (!v) return [];
    if (Array.isArray(v)) return flatten(v);
    return [String(v)];
  });
}

export function cn(...values: ClassValue[]): string {
  return flatten(values).join(" ");
}
