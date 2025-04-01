export const lorem2 = (spanClasses?: string): string[] => {
  if (spanClasses)
    return [
      `Lorem <span class="${spanClasses}">dolor</span>`,
      `<span class="${spanClasses}">Vestibulum</span> ipsum`,
      `Phasellus <span class="${spanClasses}">accumsan</span>`,
      `Curabitur <span class="${spanClasses}">nisi</span>`,
      `<span class="${spanClasses}">Nam</span> dui`,
      `Etiam <span class="${spanClasses}">rhoncus</span>`,
      `Donec <span class="${spanClasses}">sapien</span>`,
      `<span class="${spanClasses}">Nullam quis ante`,
      `Duis <span class="${spanClasses}">arcu</span>`,
      `Integer <span class="${spanClasses}">arcu</span>`,
    ];

  return [
    "Lorem ipsum",
    "Sed do",
    "Consectetur adipiscing",
    "Aenean quam",
    "Mauris feugiat",
    "Nulla facilisi",
    "Vestibulum ante",
    "Pellentesque habitant",
    "Phasellus viverra",
    "Curabitur urna",
  ];
};
