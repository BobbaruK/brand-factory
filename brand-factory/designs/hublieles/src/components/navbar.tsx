import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { CustomOptions } from "@/pages/index.astro";
import type { MenuItem } from "@/types/menu-items";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { showcase } from "../../../../globals/features/showcase/text";
import type { ComponentProps } from "../../../../globals/types/component-props";
import { Features } from "../../../../globals/types/enums";
import { BurgerIcon } from "./burger-icon";

interface Props {
  componentProps: ComponentProps<any, CustomOptions>;
  menuItems: MenuItem[];
}

export const Navbar = ({ componentProps, menuItems }: Props) => {
  const [compLoaded, setCompLoaded] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    setCompLoaded(true);

    return () => {
      setCompLoaded(false);
    };
  }, [setCompLoaded]);

  if (!compLoaded) return null;

  return (
    <div className="flex items-center gap-4 lg:gap-8 2xl:gap-10">
      {isDesktop ? (
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {menuItems.map((item, index) => (
            <React.Fragment key={item.scrollTo}>
              <li>
                <a
                  href={item.scrollTo}
                  className="hover:text-accent text-lg uppercase"
                >
                  {componentProps.features?.includes(Features.showcase)
                    ? showcase({
                        words: 1,
                      })
                    : item.label[componentProps.lang]}
                </a>
              </li>
              {index < menuItems.length - 1 && <li>/</li>}
            </React.Fragment>
          ))}
        </ul>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <BurgerIcon
              fontSize={40}
              className="text-accent cursor-pointer hover:text-inherit"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {menuItems.map((item) => (
              <DropdownMenuItem asChild key={item.scrollTo}>
                <a href={item.scrollTo} className="text-lg uppercase">
                  {item.label[componentProps.lang]}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
            className="text-accent cursor-pointer hover:text-inherit"
          >
            <path
              fill="currentColor"
              d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6"
            />
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <a href="/">English</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/it">Italiano</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
