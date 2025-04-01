export const lorem3 = (spanClasses?: string, brandName?: string): string[] => {
  if (spanClasses)
    return [
      `Lorem ipsum <span class="${spanClasses}">${
        brandName || "dolor"
      }</span>.`,
      `<span class="${spanClasses}">${
        brandName || "Vestibulum"
      }</span> ante ipsum.`,
      `Phasellus <span class="${spanClasses}">${
        brandName || "accumsan"
      }</span> est.`,
      `Curabitur ullamcorper <span class="${spanClasses}">${
        brandName || "nisi"
      }</span>.`,
      `<span class="${spanClasses}">${brandName || "Nam"}</span> eget dui.`,
      `Etiam <span class="${spanClasses}">${
        brandName || "rhoncus"
      }</span> faucibus.`,
      `Donec vitae <span class="${spanClasses}">${
        brandName || "sapien"
      }</span>.`,
      `<span class="${spanClasses}">${brandName || "Nullam"}</span> quis ante.`,
      `Duis <span class="${spanClasses}">${brandName || "arcu"}</span> tortor.`,
      `Integer ante <span class="${spanClasses}">${
        brandName || "arcu"
      }</span>.`,
    ];

  return [
    `Lorem ipsum dolor.`,
    `Vestibulum ante ipsum.`,
    `Phasellus accumsan est.`,
    `Curabitur ullamcorper nisi.`,
    `Nam eget dui.`,
    `Etiam rhoncus faucibus.`,
    `Donec vitae sapien.`,
    `Nullam quis ante.`,
    `Duis arcu tortor.`,
    `Integer ante arcu.`,
  ];
};
