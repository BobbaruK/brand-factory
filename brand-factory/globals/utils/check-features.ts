import { Features } from "../types/enums";

export const checkFeatures = (features: Features[]) => {
  if (
    (features.includes(Features.rfm) && features.includes(Features.outbrain)) ||
    (features.includes(Features.rfm) && features.includes(Features.atheneum)) ||
    (features.includes(Features.outbrain) &&
      features.includes(Features.atheneum))
  )
    throw new Error(
      `You cannot combine these features: ${Features.rfm}, ${Features.outbrain} and ${Features.atheneum}`
    );

  return features;
};
