import { Features } from "../types/enums";

export const checkFeatures = (features: Features[]) => {
  if (
    (features.includes(Features.readyForMail) && features.includes(Features.outbrain)) ||
    (features.includes(Features.readyForMail) && features.includes(Features.atheneum)) ||
    (features.includes(Features.outbrain) &&
      features.includes(Features.atheneum))
  )
    throw new Error(
      `You cannot combine these features: ${Features.readyForMail}, ${Features.outbrain} and ${Features.atheneum}`
    );

  return features;
};
