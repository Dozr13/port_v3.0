import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { FooterLayout } from "../../footer";
import { pageContainerStyles } from "./PageContainer.styles";

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
    <Box sx={pageContainerStyles.pageContainer}>
      <Box sx={pageContainerStyles.messageContainer}>
        <Typography variant="h2" sx={pageContainerStyles.mainMessage}>
          {mainMessage}
        </Typography>
        {secondaryMessage && (
          <Typography variant="h5" sx={pageContainerStyles.secondaryMessage}>
            {secondaryMessage}
          </Typography>
        )}
      </Box>
      {children}
      <FooterLayout />
    </Box>
  );
};

export default PageContainer;
