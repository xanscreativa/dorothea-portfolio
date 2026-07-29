export interface Project {
  id: string | number;
  slug?: string;
  title: string;
  subtitle?: string;
  category: string;
  client?: string;
  role?: string;
  year?: string;
  tools?: string[];
  coverMedia?: {
    type: "image" | "video";
    url: string;
  };
  cover?: string;
  hero?: string;
  duration?: string;
  software?: string[];
  services?: string[];
  overview?: string;
  challenge?: string;
  solution?: string;
  brandColors?: string[];
  colors?: string[];
  typography?:
    | string
    | {
        fontFamily: string;
        description: string;
      };
  gallery?: Array<
    | string
    | {
        type: "image" | "video";
        url: string;
        caption?: string;
        aspectRatio?: "landscape" | "portrait" | "square";
      }
  >;
  result?: string[];
  results?: {
    metric: string;
    label: string;
  }[];
  nextProject?: {
    id: string;
    title: string;
    cover: string;
  };
}