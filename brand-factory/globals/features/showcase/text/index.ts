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
        words: 1;
      }
    | {
        words: 2 | 3 | 5 | 10 | 15 | 30 | 50;
        spanClasses?: string;
        brandName?: string;
      }
) => {
  const randNo = (max: number) => Math.floor(Math.random() * max);

  switch (opts.words) {
    case 1:
      return lorem1[randNo(lorem1.length)];

    case 2:
      return lorem2(opts.spanClasses, opts.brandName)[randNo(lorem2().length)];

    case 3:
      return lorem3(opts.spanClasses, opts.brandName)[randNo(lorem3().length)];

    case 5:
      return lorem5(opts.spanClasses, opts.brandName)[randNo(lorem5().length)];

    case 10:
      return lorem10(opts.spanClasses, opts.brandName)[
        randNo(lorem10().length)
      ];

    case 15:
      return lorem15(opts.spanClasses, opts.brandName)[
        randNo(lorem15().length)
      ];

    case 30:
      return lorem30(opts.spanClasses, opts.brandName)[
        randNo(lorem30().length)
      ];

    case 50:
      return lorem50(opts.spanClasses, opts.brandName)[
        randNo(lorem50().length)
      ];

    default:
      return lorem10()[randNo(lorem10().length)];
  }
};
