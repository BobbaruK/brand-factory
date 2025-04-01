import { lorem1 } from "./lorem-1";
import { lorem10 } from "./lorem-10";
import { lorem15 } from "./lorem-15";
import { lorem2 } from "./lorem-2";
import { lorem3 } from "./lorem-3";
import { lorem30 } from "./lorem-30";
import { lorem5 } from "./lorem-5";
import { lorem50 } from "./lorem-50";

export const showcase = (
  opts:
    | {
        words: 1 | 5 | 10 | 15 | 30 | 50;
      }
    | {
        words: 2 | 3;
        spanClasses?: string;
      }
) => {
  const randNo = (max: number) => Math.floor(Math.random() * max) + 1;

  switch (opts.words) {
    case 1:
      return lorem1[randNo(lorem1.length - 1)];

    case 2:
      return lorem2(opts.spanClasses)[randNo(lorem2().length - 1)];

    case 3:
      return lorem3(opts.spanClasses)[randNo(lorem3().length - 1)];

    case 5:
      return lorem5[randNo(lorem5.length - 1)];

    case 10:
      return lorem10[randNo(lorem10.length - 1)];

    case 15:
      return lorem15[randNo(lorem15.length - 1)];

    case 30:
      return lorem30[randNo(lorem30.length - 1)];

    case 50:
      return lorem50[randNo(lorem50.length - 1)];

    default:
      return lorem10[randNo(lorem10.length - 1)];
  }
};
