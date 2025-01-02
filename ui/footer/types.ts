export interface FooterLink {
  label: string;
  href: string;
  new?: boolean;
  featured?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: any;
  href: string;
  label: string;
  color: string;
}