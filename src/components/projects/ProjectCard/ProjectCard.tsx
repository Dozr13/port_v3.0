import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { StaticImageData } from "next/image";
import React, { useMemo } from "react";
import { SECONDARY_DARK_COLOR } from "../../../../constants/color-palette";
import {
  cardStyle,
  linkIconSize,
  technologiesIconSize,
} from "../../../../constants/styles";
import LinkIcons from "../../icons/LinkIcons";
import { getLinkIcons } from "../utils/getLinkIcons";
import { getImageStyles } from "../utils/imageStyle.utils";
import ProjectCardImage from "./ProjectCardImage";
import ProjectCardTechnologies from "./ProjectCardTechnologies";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: StaticImageData;
  technologiesUsed: string[];
  githubLink?: string;
  website?: string;
  iosLink?: string;
  androidLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  logo,
  technologiesUsed,
  githubLink,
  website,
  iosLink,
  androidLink,
}) => {
  const isSquareImage = logo?.src.includes("shiftscribe");
  const imageStyles = getImageStyles(isSquareImage);
  const linkIcons = useMemo(
    () => getLinkIcons(githubLink, website, iosLink, androidLink),
    [githubLink, website, iosLink, androidLink],
  );

  return (
    <Card
      sx={{
        ...cardStyle,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <ProjectCardImage
        logo={logo}
        title={title}
        isSquareImage={isSquareImage}
        imageStyles={imageStyles}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ my: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
      </CardContent>
      <Box
        sx={{
          py: 2,
          px: 3,
          backgroundColor: SECONDARY_DARK_COLOR,
          borderRadius: 2,
          mt: "auto",
        }}
      >
        <ProjectCardTechnologies
          technologiesUsed={technologiesUsed}
          sx={technologiesIconSize}
        />
        <Divider sx={{ my: 2, borderColor: "primary.main" }} />
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ fontWeight: "medium", textAlign: "center" }}
        >
          Check It Out On:
        </Typography>
        <CardActions disableSpacing sx={{ justifyContent: "center" }}>
          <LinkIcons linkIcons={linkIcons} sx={linkIconSize} />
        </CardActions>
      </Box>
    </Card>
  );
};

export default ProjectCard;
