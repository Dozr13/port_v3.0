import { FaAndroid, FaApple, FaGithub, FaGlobe } from "react-icons/fa";

export const getLinkIcons = (
  githubLink?: string,
  website?: string,
  iosLink?: string,
  androidLink?: string,
) => {
  const icons = [];

  if (githubLink)
    icons.push({ link: githubLink, icon: FaGithub, label: "GitHub" });
  if (website) icons.push({ link: website, icon: FaGlobe, label: "Web" });
  if (iosLink) icons.push({ link: iosLink, icon: FaApple, label: "iOS" });
  if (androidLink)
    icons.push({ link: androidLink, icon: FaAndroid, label: "Android" });

  return icons;
};
