export const lorem30 = (spanClasses?: string, brandName?: string): string[] => {
  if (spanClasses)
    return [
      `Lorem ipsum <span class="${spanClasses}">${
        brandName || "dolor sit amet"
      }</span>, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque <span class="${spanClasses}">${
        brandName || "penatibus et magnis"
      }</span> dis parturient montes nascetur ridiculus mus.`,
      `Donec quam felis, ultricies nec, <span class="${spanClasses}">${
        brandName || "pellentesque eu pretium"
      }</span> quis sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, <span class="${spanClasses}">${
        brandName || "vulputate eget arcu"
      }</span>. In enim justo.`,
      `Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt cras dapibus <span class="${spanClasses}">${
        brandName || "vivamus elementum semper"
      }</span> nisi. Aenean vulputate eleifend tellus.`,
      `Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, <span class="${spanClasses}">${
        brandName || "tellus phasellus viverra"
      }</span> nulla ut metus varius laoreet.`,
      `Quisque rutrum, aenean imperdiet <span class="${spanClasses}">${
        brandName || "etiam ultricies nisi"
      }</span> vel augue. Curabitur ullamcorper ultricies nisi nam eget dui. Etiam <span class="${spanClasses}">${
        brandName || "rhoncus faucibus maecenas"
      }</span> tempus tellus eget condimentum rhoncus.`,
      `Sem quam semper libero sit amet adipiscing sem neque sed ipsum nam quam nunc, blandit vel luctus pulvinar hendrerit id lorem. Luctus pulvinar, hendrerit id, lorem. <span class="${spanClasses}">${
        brandName || "Maecenas nec odio"
      }</span>.`,
      `Ante tincidunt tempus. <span class="${spanClasses}">${
        brandName || "Donec vitae sapien"
      }</span> ut libero venenatis faucibus. Nullam quis ante. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Integer ante arcu.`,
      `Accumsan a, consectetuer eget, posuere ut, mauris, <span class="${spanClasses}">${
        brandName || "sed fringilla mauris"
      }</span> sit amet nibh. Donec sodales sagittis magna. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis.`,
      `Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. <span class="${spanClasses}">${
        brandName || "Nulla ultricies sit"
      }</span> amet, nonummy id, imperdiet feugiat, pede. Phasellus leo dolor, tempus non, auctor et.`,
      `Hendrerit quis, nisi. <span class="${spanClasses}">${
        brandName || "Aenean sollicitudin imperdiet"
      }</span> eros, eget fermentum enim. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus faucibus. Nulla suscipit neque felis eget.`,
    ];

  return [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.",
    "Donec quam felis, ultricies nec, pellentesque eu pretium quis sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget arcu. In enim justo.",
    "Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt cras dapibus vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
    "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus phasellus viverra nulla ut metus varius laoreet.",
    "Quisque rutrum, aenean imperdiet etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi nam eget dui. Etiam rhoncus faucibus maecenas tempus tellus eget condimentum rhoncus.",
    "Sem quam semper libero sit amet adipiscing sem neque sed ipsum nam quam nunc, blandit vel luctus pulvinar hendrerit id lorem. Luctus pulvinar, hendrerit id, lorem. Maecenas nec odio.",
    "Ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Integer ante arcu.",
    "Accumsan a, consectetuer eget, posuere ut, mauris, sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis.",
    "Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Nulla ultricies sit amet, nonummy id, imperdiet feugiat, pede. Phasellus leo dolor, tempus non, auctor et.",
    "Hendrerit quis, nisi. Aenean sollicitudin imperdiet eros, eget fermentum enim. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus faucibus. Nulla suscipit neque felis eget.",
  ];
};
