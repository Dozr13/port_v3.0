import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";

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
  <Box sx={{ ...imageStyles, display: "flex" }}>
    <Image src={logo} alt={title} width={isSquareImage ? 1500 : 1900} />
  </Box>
);

export default ProjectCardImage;
