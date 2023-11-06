import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  SECONDARY_BACKGROUND_COLOR,
} from "../../constants/color-palette";
import Footer from "./footer/Footer";

interface PageContainerProps {
  children: ReactNode;
  mainMessage: string;
  secondaryMessage?: string;
}

const PageContainer = ({
  children,
  mainMessage,
  secondaryMessage,
}: PageContainerProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        background: `linear-gradient(to top,  ${BACKGROUND_COLOR}, ${SECONDARY_BACKGROUND_COLOR}, rgba(255,255,255,0.1))`,
        "@media (max-width:600px)": {
          backgroundColor: "transparent",
          flexGrow: 0,
        },
      }}
    >
      {/* Introduction */}
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          background: SECONDARY_BACKGROUND_COLOR,
          textAlign: "center",
          mb: 4,
          p: 4,
          pb: 8,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: PRIMARY_COLOR,
            mb: 2,
            "@media (max-width:600px)": {
              fontSize: "2.5rem",
            },
          }}
        >
          {mainMessage}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: PRIMARY_COLOR,
            "@media (max-width:600px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          {secondaryMessage}
        </Typography>
      </Box>
      {children}
      <Footer />
    </Box>
  );
};

export default PageContainer;
