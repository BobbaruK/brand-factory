import type { TranslationsType } from "../types/translations";

/**
 * Returns a set of translations based on a variant key from custom options.
 *
 * @template Options - A record describing available custom options (e.g., { textVersion: "variantKey" }).
 * @template K - A specific key within the `Options` type to use as the variant selector.
 * @template VariantKey - The union of string values expected for the variant key.
 *
 * @param obj - An object mapping variant keys (including `"default"`) to translation sets.
 *              The `"default"` key is **required** and used as a fallback if the selected variant is not found.
 *
 * @param key - The key within `customOptions` whose value will be used to select the translation variant.
 *
 * @param customOptions - An optional object containing custom flags or settings, such as a variant name.
 *
 * @returns A translation object (`TranslationsType`) corresponding to the selected variant,
 *          or `obj.default` if no valid variant is found.
 *
 * @example
 * const translations = textBy(
 *   {
 *     default: { en: "Hello", es: "Hola" },
 *     short:   { en: "Hi", es: "Ey" }
 *   },
 *   "textVersion",
 *   { textVersion: "short" }
 * );
 *
 * // returns: { en: "Hi", es: "Ey" }
 */

export const textBy = <
  Options extends Record<string, any>,
  K extends keyof Options,
  VariantKey extends string = NonNullable<Options[K]>
>(
  obj: Record<"default" | VariantKey, TranslationsType>,
  key: K,
  customOptions?: Options
): TranslationsType => {
  const variant = customOptions?.[key];
  return (
    (variant && variant in obj ? obj[variant as VariantKey] : obj.default) ?? {}
  );
};
