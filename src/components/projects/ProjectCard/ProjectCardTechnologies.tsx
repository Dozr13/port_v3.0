import { Box, SxProps, Theme, Tooltip } from "@mui/material";
import { ElementType } from "react";
import {
  SiAxios,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiStripe,
  SiTypescript,
} from "react-icons/si";
import { ICON_COLORS } from "../../../../constants/color-palette";

interface ProjectTechnologiesProps {
  technologiesUsed: string[];
  sx?: SxProps<Theme>;
}

interface TechDetail {
  icon: ElementType;
  color: string;
}

const techIconMap: { [key: string]: TechDetail | undefined } = {
  "React.js": { icon: SiReact, color: ICON_COLORS.React },
  "React Native": { icon: SiReact, color: ICON_COLORS.ReactNative },
  "Firebase Realtime DB": { icon: SiFirebase, color: ICON_COLORS.Firebase },
  Express: { icon: SiExpress, color: ICON_COLORS.Express },
  Axios: { icon: SiAxios, color: ICON_COLORS.Axios },
  TypeScript: { icon: SiTypescript, color: ICON_COLORS.TypeScript },
  "Next.js": { icon: SiNextdotjs, color: ICON_COLORS.Next },
  "Node.js": { icon: SiNodedotjs, color: ICON_COLORS.Node },
  Expo: { icon: SiExpo, color: ICON_COLORS.Expo },
  Stripe: { icon: SiStripe, color: ICON_COLORS.Stripe },
};

const ProjectCardTechnologies = ({
  technologiesUsed,
  sx,
}: ProjectTechnologiesProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 4,
        "@media (max-width:600px)": {
          gap: 2.5,
        },
      }}
    >
      {technologiesUsed.map((tech, index) => {
        const techDetail = techIconMap[tech];
        if (techDetail) {
          const { icon: Icon, color } = techDetail;
          return (
            <Tooltip key={index} title={tech} placement="top">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: color,
                  ...sx,
                }}
              >
                <Icon />
              </Box>
            </Tooltip>
          );
        }
        return null;
      })}
    </Box>
  );
};

export default ProjectCardTechnologies;
