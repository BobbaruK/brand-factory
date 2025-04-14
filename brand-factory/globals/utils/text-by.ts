import type { TranslationsType } from "../types/translations";

/**
 * Selects a translation variant from a provided object based on a key from custom options.
 *
 * This generic function is useful when you have multiple translation variants (e.g., "default", "carousel", etc.)
 * and want to dynamically select the correct one depending on the value of a key from a configuration object (like `customOptions`).
 *
 * @template Options - The shape of the options object (e.g., `{ asideType?: "default" | "carousel" }`).
 * @template K - The name of the key in `Options` used to determine which translation variant to select.
 * @template VariantKey - The possible values that the selected key (`K`) can have, which must match the keys in the `obj` parameter.
 *
 * @param obj - An object where each key corresponds to a variant name (like "default" or "carousel") and its value is a `TranslationsType` object.
 * @param key - The name of the key in `customOptions` whose value will be used to select the translation variant.
 * @param customOptions - An optional configuration object that may contain the key `K` whose value determines the selected variant.
 *
 * @returns The corresponding `TranslationsType` for the selected variant, or an empty object if no match is found.
 *
 * @example
 * const options = { asideType: "carousel" };
 * const translations = {
 *   default: { en: "Default text" },
 *   carousel: { en: "Carousel text" },
 * };
 * const result = textBy(translations, "asideType", options);
 * // result -> { en: "Carousel text" }
 */

export const textBy = <
  Options extends Record<string, any>,
  K extends keyof Options,
  VariantKey extends string = NonNullable<Options[K]>
>(
  obj: Record<VariantKey, TranslationsType>,
  key: K,
  customOptions?: Options
): TranslationsType => {
  const variant = customOptions?.[key] ?? "default";
  return obj[variant as VariantKey] ?? {};
};
