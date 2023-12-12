export type IconColorMap = {
  [key in
    | "GitHub"
    | "LinkedIn"
    | "Resume"
    | "iOS"
    | "Android"
    | "React"
    | "ReactNative"
    | "Firebase"
    | "Express"
    | "Axios"
    | "TypeScript"
    | "Next"
    | "Node"
    | "Expo"
    | "Stripe"]: string;
};

export interface LinkIconItem {
  link: string;
  icon: React.ComponentType<{ size?: string }>;
  label: string;
}
