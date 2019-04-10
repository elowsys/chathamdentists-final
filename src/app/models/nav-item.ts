export interface NavItem {
  title: string;
  link: string;
  visible: boolean;
  tag: string;
  isRoot: boolean;
  children: NavItem[];
}
