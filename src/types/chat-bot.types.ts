export type Message = {
  sender: "user" | "bot";
  content: string | JSX.Element | JSX.Element[];
};

export type Intent = string;

export interface Entities {
  skill?: string[];
  location?: string[];
  datetime?: string[];
}
