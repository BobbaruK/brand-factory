import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface Props {
  navItems: {
    label: string;
    href: string;
  }[];
}

export const Navigation = ({ navItems }: Props) => {
  const matches = useMediaQuery("(min-width: 768px)");
  const [isCompLoaded, setIsCompLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsCompLoaded(true);
    return () => {};
  }, [setIsCompLoaded]);

  if (!isCompLoaded) return null;

  return (
    <nav>
      {!matches ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="bg-transparent p-1 [&>svg]:size-6!"
              size={"icon"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M20 7H4m16 5H4m16 5H4"
                />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {navItems.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <a href={item.href} className="cursor-pointer">
                  {item.label}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <ol
          className={cn(
            "font-rubik flex gap-4 text-xs text-[oklch(from_#FFFFFF_l_c_h_/_0.5)]",
          )}
        >
          {navItems.map((item, index) => {
            const isLast = index === navItems.length - 1;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    `hover:text-white`,
                    `${isLast ? "font-medium text-white" : "text-[oklch(from_#FFFFFF_l_c_h_/_0.5)]"}`,
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ol>
      )}
    </nav>
  );
};
