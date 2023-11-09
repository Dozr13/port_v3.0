import { Box, CardMedia, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { FooterLayout } from "../../footer";
import { pageContainerStyles } from "./PageContainer.styles";

interface PageContainerProps {
  children: ReactNode;
  mainMessage: string;
  pageImage: StaticImageData;
  secondaryMessage?: string;
  showImage?: boolean;
}

const PageContainer = ({
  children,
  mainMessage,
  pageImage,
  secondaryMessage,
  showImage = true,
}: PageContainerProps) => {
  return (
    <Box sx={pageContainerStyles.pageContainer}>
      <Box
        sx={{
          ...pageContainerStyles.messageContainer,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", sm: "flex-start" },
          justifyContent: "space-around",
          gap: { md: 1 },
        }}
      >
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
            maxWidth: { xs: "100%", md: "600px" },
          }}
        >
          <Typography variant="h1" sx={pageContainerStyles.mainMessage} my={2}>
            {mainMessage}
          </Typography>
          {secondaryMessage && (
            <Typography variant="h5" sx={pageContainerStyles.secondaryMessage}>
              {secondaryMessage}
            </Typography>
          )}
        </Box>
        {showImage && pageImage && (
          <Box
            sx={{
              width: 150,
              position: "relative",
              order: { xs: -1, md: 2 },
              alignSelf: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{ objectFit: "cover", width: "100%" }}
              image={pageImage.src}
              alt={pageImage.src}
            />
          </Box>
        )}
      </Box>
      {children}
      <FooterLayout />
    </Box>
  );
};

export default PageContainer;
