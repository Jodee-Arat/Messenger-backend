export function toBigIntFields<T extends Record<string, any>>(
  obj: T
): { [K in keyof T]: bigint } {
  const result = {} as { [K in keyof T]: bigint };

  for (const key in obj) {
    const val = obj[key];

    if (val === undefined || val === null) {
      throw new Error(
        `Field "${key}" is undefined or null, cannot convert to BigInt`
      );
    }

    try {
      result[key] = BigInt(val.toString());
    } catch {
      throw new Error(
        `Field "${key}" with value "${val}" cannot be converted to BigInt`
      );
    }
  }

  return result;
}
