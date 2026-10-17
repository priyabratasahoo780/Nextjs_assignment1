export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Students", href: "#", active: true },
  { label: "Departments", href: "#" },
  { label: "About", href: "#" },
];
