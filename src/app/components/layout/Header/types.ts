export interface MenuList {
  name: string;
  href: string;
}

export interface AuthList extends MenuList {}

export interface HeaderCommonProps {
  isScrolled: boolean;
}
