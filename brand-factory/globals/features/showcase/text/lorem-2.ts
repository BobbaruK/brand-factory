export const lorem2 = (spanClasses?: string, brandName?: string): string[] => {
  if (spanClasses)
    return [
      `Lorem <span class="${spanClasses}">${brandName || "dolor"}</span>`,
      `<span class="${spanClasses}">${brandName || "Vestibulum"}</span> ipsum`,
      `Phasellus <span class="${spanClasses}">${brandName || "accumsan"}</span>`,
      `Curabitur <span class="${spanClasses}">${brandName || "nisi"}</span>`,
      `<span class="${spanClasses}">${brandName || "Nam"}</span> dui`,
      `Etiam <span class="${spanClasses}">${brandName || "rhoncus"}</span>`,
      `Donec <span class="${spanClasses}">${brandName || "sapien"}</span>`,
      `<span class="${spanClasses}">${brandName || "Nullam"}</span> quis ante`,
      `Duis <span class="${spanClasses}">${brandName || "arcu"}</span>`,
      `Integer <span class="${spanClasses}">${brandName || "arcu"}</span>`,
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
