export const lorem3 = (spanClasses?: string): string[] => {
  if (spanClasses)
    return [
      `Lorem ipsum <span class="${spanClasses}">dolor</span>.`,
      `<span class="${spanClasses}">Vestibulum</span> ante ipsum.`,
      `Phasellus <span class="${spanClasses}">accumsan</span> est.`,
      `Curabitur ullamcorper <span class="${spanClasses}">nisi</span>.`,
      `<span class="${spanClasses}">Nam</span> eget dui.`,
      `Etiam <span class="${spanClasses}">rhoncus</span> faucibus.`,
      `Donec vitae <span class="${spanClasses}">sapien</span>.`,
      `<span class="${spanClasses}">Nullam</span> quis ante.`,
      `Duis <span class="${spanClasses}">arcu</span> tortor.`,
      `Integer ante <span class="${spanClasses}">arcu</span>.`,
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
