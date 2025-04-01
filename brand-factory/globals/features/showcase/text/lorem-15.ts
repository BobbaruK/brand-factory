export const lorem15 = (spanClasses?: string, brandName?: string): string[] => {
  if (spanClasses)
    return [
      `Lorem <span class="${spanClasses}">${
        brandName || "ipsum dolor sit"
      }</span> amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor aenean massa.`,
      `Cum sociis natoque <span class="${spanClasses}">${
        brandName || "penatibus et magnis"
      }</span> dis parturient montes nascetur ridiculus mus donec quam felis.`,
      `Ultricies nec pellentesque eu <span class="${spanClasses}">${
        brandName || "pretium quis sem"
      }</span> nulla consequat massa quis enim donec pede justo.`,
      `Fringilla vel aliquet nec <span class="${spanClasses}">${
        brandName || "vulputate eget arcu"
      }</span> in enim justo rhoncus ut imperdiet a venenatis vitae.`,
      `Justo nullam dictum <span class="${spanClasses}">${
        brandName || "felis eu pede"
      }</span> mollis pretium integer tincidunt cras dapibus vivamus elementum semper.`,
      `Nisi aenean vulputate eleifend tellus aenean leo <span class="${spanClasses}">${
        brandName || "ligula porttitor eu"
      }</span> consequat vitae eleifend ac enim.`,
      `Aliquam lorem ante dapibus in viverra quis <span class="${spanClasses}">${
        brandName || "feugiat a tellus"
      }</span> phasellus viverra nulla ut metus varius.`,
      `Laoreet quisque rutrum aenean imperdiet etiam ultricies nisi vel augue <span class="${spanClasses}">${
        brandName || "curabitur ullamcorper ultricies"
      }</span> nisi nam eget.`,
      `Dui etiam rhoncus maecenas tempus tellus eget condimentum rhoncus sem <span class="${spanClasses}">${
        brandName || "quam semper libero"
      }</span> sit amet.`,
      `Adipiscing sem neque sed ipsum nam quam nunc <span class="${spanClasses}">${
        brandName || "blandit vel luctus"
      }</span> pulvinar hendrerit id lorem.`,
    ];

  return [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor aenean massa.",
    "Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec quam felis.",
    "Ultricies nec pellentesque eu pretium quis sem nulla consequat massa quis enim donec pede justo.",
    "Fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut imperdiet a venenatis vitae.",
    "Justo nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper.",
    "Nisi aenean vulputate eleifend tellus aenean leo ligula porttitor eu consequat vitae eleifend ac enim.",
    "Aliquam lorem ante dapibus in viverra quis feugiat a tellus phasellus viverra nulla ut metus varius.",
    "Laoreet quisque rutrum aenean imperdiet etiam ultricies nisi vel augue curabitur ullamcorper ultricies nisi nam eget.",
    "Dui etiam rhoncus maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.",
    "Adipiscing sem neque sed ipsum nam quam nunc blandit vel luctus pulvinar hendrerit id lorem.",
  ];
};
