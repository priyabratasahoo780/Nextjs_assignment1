export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Students", href: "/students", active: true },
  { label: "Departments", href: "/departments" },
  { label: "About", href: "/about" },
];
