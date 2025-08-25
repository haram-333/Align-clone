export type SubmenuLink = { label: string; href: string };
export type SubmenuColumn = { title: string; links: SubmenuLink[] };
export type SubmenuData = {
  key: string;
  label: string; // Navigation display label
  title: string;
  gradient: string; // CSS gradient string
  widthClass?: string; // optional Tailwind width class override
  columns: SubmenuColumn[];
};


