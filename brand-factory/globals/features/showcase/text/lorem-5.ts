export const lorem5 = (spanClasses?: string, brandName?: string): string[] => {
  if (spanClasses)
    return [
      `Lorem ipsum <span class="${spanClasses}">${
        brandName || "dolor sit"
      }</span> amet.`,
      `Vestibulum <span class="${spanClasses}">${
        brandName || "ante ipsum"
      }</span> primis faucibus.`,
      `<span class="${spanClasses}">${
        brandName || "Phasellus accumsan"
      }</span> est vel sapien.`,
      `Curabitur ullamcorper <span class="${spanClasses}">${
        brandName || "ultricies nisi"
      }</span> eget.`,
      `Nam <span class="${spanClasses}">${
        brandName || "eget dui"
      }</span>. Etiam rhoncus.`,
      `Donec <span class="${spanClasses}">${
        brandName || "vitae sapien"
      }</span> ut libero.`,
      `Nullam quis ante. <span class="${spanClasses}">${
        brandName || "Duis arcu"
      }</span>.`,
      `Integer ante arcu, <span class="${spanClasses}">${
        brandName || "accumsan a"
      }</span>.`,
      `Sed <span class="${spanClasses}">${
        brandName || "fringilla mauris"
      }</span> sit amet.`,
      `Etiam sit amet <span class="${spanClasses}">${
        brandName || "orci eros"
      }</span>.`,
    ];

  return [
    "Lorem ipsum dolor sit amet.",
    "Vestibulum ante ipsum primis faucibus.",
    "Phasellus accumsan est vel sapien.",
    "Curabitur ullamcorper ultricies nisi eget.",
    "Nam eget dui. Etiam rhoncus.",
    "Donec vitae sapien ut libero.",
    "Nullam quis ante. Duis arcu.",
    "Integer ante arcu, accumsan a.",
    "Sed fringilla mauris sit amet.",
    "Etiam sit amet orci eros.",
  ];
};
