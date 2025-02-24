export type Languages =
  | "en"
  | "it"
  | "tr"
  | "ro"
  | "ar"
  | "de"
  | "es"
  | "sv"
  | "pt"
  | "fi"
  | "pl"
  | "hu"
  | "th"
  | "ms"
  | "vi"
  | "showcase";

export type TranslationsType = {
  [key in Languages]: string;
};
