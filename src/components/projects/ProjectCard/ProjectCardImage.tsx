import { Box, CardMedia } from "@mui/material";
import { StaticImageData } from "next/image";

interface ProjectCardImageProps {
  logo: StaticImageData;
  title: string;
  isSquareImage: boolean;
  imageStyles: {
    mb: number;
    width: string[];
    height: string[];
  };
}

const ProjectCardImage: React.FC<ProjectCardImageProps> = ({
  logo,
  title,
  isSquareImage,
  imageStyles,
}) => (
  <Box sx={{ display: "flex" }}>
    <CardMedia
      component="img"
      sx={{ objectFit: "cover", width: "100%" }}
      image={logo.src}
      alt={title}
    />
  </Box>
);

export default ProjectCardImage;
