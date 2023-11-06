import { Card, CardContent } from "@mui/material";
import { StaticImageData } from "next/image";
import React, { useMemo } from "react";
import { cardStyle } from "../../../../constants/styles";
import LinkIcons from "../../icons/LinkIcons";
import { getLinkIcons } from "../utils/getLinkIcons";
import { getImageStyles } from "../utils/imageStyle.utils";
import ProjectCardDescription from "./ProjectCardDescription";
import ProjectCardImage from "./ProjectCardImage";
import ProjectCardTitle from "./ProjectCardTitle";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink?: string;
  website?: string;
  iosLink?: string;
  androidLink?: string;
  logo: StaticImageData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  website,
  iosLink,
  androidLink,
  logo,
}) => {
  const isSquareImage = logo?.src.includes("shiftscribe");
  const imageStyles = getImageStyles(isSquareImage);

  const linkIcons = useMemo(
    () => getLinkIcons(githubLink, website, iosLink, androidLink),
    [githubLink, website, iosLink, androidLink],
  );

  return (
    <Card sx={cardStyle}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <ProjectCardImage
          logo={logo}
          title={title}
          isSquareImage={isSquareImage}
          imageStyles={imageStyles}
        />
        <ProjectCardTitle title={title} />
        <ProjectCardDescription description={description} />
        <LinkIcons linkIcons={linkIcons} />
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
