import type { SVGProps } from "react";

export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={24}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"Instagram"}</title>
    <rect height={20} rx={5} ry={5} width={20} x={2} y={2} />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
  </svg>
);
