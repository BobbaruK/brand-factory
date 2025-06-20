import { Features } from "../types/enums";

export const checkFeatures = (features: Features[]) => {
  const showcase = countOccurrences(features, Features.showcase);
  const readyForMail = countOccurrences(features, Features.readyForMail);
  const outbrain = countOccurrences(features, Features.outbrain);
  const atheneum = countOccurrences(features, Features.atheneum);
  const officialTerms = countOccurrences(features, Features.officialTerms);
  const type5 = countOccurrences(features, Features.type5);

  const message = `You cannot combine these features: "${Features.readyForMail}", "${Features.outbrain}", "${Features.atheneum}", "${Features.officialTerms}" and "${Features.type5}"`;

  if (
    showcase > 1 ||
    readyForMail > 1 ||
    outbrain > 1 ||
    atheneum > 1 ||
    officialTerms > 1 ||
    type5 > 1
  )
    throw new Error(
      `There is no need to pass down the same feature multiple times.`
    );

  if (
    readyForMail > 0 &&
    (outbrain > 0 || atheneum > 0 || officialTerms > 0 || type5 > 0)
  )
    throw new Error(message);

  if (
    outbrain > 0 &&
    (readyForMail > 0 || atheneum > 0 || officialTerms > 0 || type5 > 0)
  )
    throw new Error(message);

  if (
    atheneum > 0 &&
    (outbrain > 0 || readyForMail > 0 || officialTerms > 0 || type5 > 0)
  )
    throw new Error(message);

  if (
    officialTerms > 0 &&
    (outbrain > 0 || atheneum > 0 || readyForMail > 0 || type5 > 0)
  )
    throw new Error(message);

  if (
    type5 > 0 &&
    (outbrain > 0 || atheneum > 0 || readyForMail > 0 || officialTerms > 0)
  )
    throw new Error(message);

  return features;
};

function countOccurrences(arr: string[], target: string): number {
  return arr.reduce((count, item) => {
    return count + (item === target ? 1 : 0);
  }, 0);
}

function featureDep(nr: number, features: number[]) {}
