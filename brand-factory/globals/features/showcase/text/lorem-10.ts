export const lorem10 = (spanClasses?: string, brandName?: string): string[] => {
  if (spanClasses)
    return [
      `Phasellus <span class="${spanClasses}">${
        brandName || "viverra nulla"
      }</span> ut metus varius laoreet. Quisque rutrum hendrerit.`,
      `Curabitur ullamcorper <span class="${spanClasses}">${
        brandName || "ultricies nisi"
      }</span>. Nam eget dui. Etiam rhoncus faucibus.`,
      `Nam quam nunc, <span class="${spanClasses}">${
        brandName || "blandit vel"
      }</span>, luctus pulvinar, hendrerit id, lorem.`,
      `Donec vitae <span class="${spanClasses}">${
        brandName || "sapien ut"
      }</span> libero venenatis faucibus. Nullam quis ante.`,
      `Etiam <span class="${spanClasses}">${
        brandName || "sit amet"
      }</span> orci eget eros faucibus tincidunt. Duis leo.`,
      `Sed fringilla mauris sit amet nibh. Donec <span class="${spanClasses}">${
        brandName || "sodales sagittis"
      }</span> magna.`,
      `Duis arcu tortor, suscipit eget, <span class="${spanClasses}">${
        brandName || "imperdiet nec"
      }</span>, imperdiet iaculis, ipsum.`,
      `Integer ante arcu, <span class="${spanClasses}">${
        brandName || "accumsan a"
      }</span>, consectetuer eget, posuere ut, mauris.`,
      `Nullam nulla ultricies sit amet, <span class="${spanClasses}">${
        brandName || "nonummy id"
      }</span>, imperdiet feugiat, pede.`,
      `Phasellus leo dolor, <span class="${spanClasses}">${
        brandName || "tempus non"
      }</span>, auctor et, hendrerit quis, nisi.`,
    ];

  return [
    "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum hendrerit.",
    "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus faucibus.",
    "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
    "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
    "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
    "Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
    "Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
    "Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.",
    "Nullam nulla ultricies sit amet, nonummy id, imperdiet feugiat, pede.",
    "Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.",
  ];
};
