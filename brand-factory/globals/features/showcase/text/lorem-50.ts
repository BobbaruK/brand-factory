export const lorem50 = (spanClasses?: string, brandName?: string): string[] => {
  if (spanClasses)
    return [
      `Lorem ipsum <span class="${spanClasses}">${
        brandName || "dolor sit"
      }</span> amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu pretium quis sem nulla consequat massa quis enim.`,
      `Donec <span class="${spanClasses}">${
        brandName || "pede justo"
      }</span>, fringilla vel, aliquet nec, vulputate eget arcu in enim justo rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt cras dapibus vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.`,
      `Porttitor eu, consequat vitae, <span class="${spanClasses}">${
        brandName || "eleifend ac"
      }</span>, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus phasellus viverra nulla ut metus varius laoreet. Quisque rutrum, aenean imperdiet etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi nam eget dui. Etiam rhoncus faucibus.`,
      `<span class="${spanClasses}">${
        brandName || "Maecenas tempus"
      }</span>, tellus eget condimentum rhoncus, sem quam semper libero sit amet adipiscing sem neque sed ipsum nam quam nunc, blandit vel luctus pulvinar hendrerit id lorem. Luctus pulvinar, hendrerit id, lorem. Maecenas nec odio ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.`,
      `<span class="${spanClasses}">${
        brandName || "Nullam quis"
      }</span> ante. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Nulla ultricies sit amet, nonummy id, imperdiet feugiat, pede. <span class="${spanClasses}">${
        brandName || "Phasellus leo"
      }</span> dolor, tempus non, auctor et. Hendrerit quis, nisi.`,
      `Aenean <span class="${spanClasses}">${
        brandName || "sollicitudin imperdiet"
      }</span> eros, eget fermentum enim. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus faucibus. Nulla suscipit neque felis eget malesuada. Donec vulputate magna eu sapien tempus, non vulputate arcu ultricies. Aliquam erat volutpat. Aenean tincidunt interdum velit.`,
    ];

  return [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu pretium quis sem nulla consequat massa quis enim.",
    "Donec pede justo, fringilla vel, aliquet nec, vulputate eget arcu in enim justo rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt cras dapibus vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.",
    "Porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus phasellus viverra nulla ut metus varius laoreet. Quisque rutrum, aenean imperdiet etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi nam eget dui. Etiam rhoncus faucibus.",
    "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero sit amet adipiscing sem neque sed ipsum nam quam nunc, blandit vel luctus pulvinar hendrerit id lorem. Luctus pulvinar, hendrerit id, lorem. Maecenas nec odio ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.",
    "Nullam quis ante. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Nulla ultricies sit amet, nonummy id, imperdiet feugiat, pede. Phasellus leo dolor, tempus non, auctor et. Hendrerit quis, nisi.",
    "Aenean sollicitudin imperdiet eros, eget fermentum enim. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus faucibus. Nulla suscipit neque felis eget malesuada. Donec vulputate magna eu sapien tempus, non vulputate arcu ultricies. Aliquam erat volutpat. Aenean tincidunt interdum velit.",
  ];
};
