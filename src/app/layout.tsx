import { Box } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactElement } from "react";
import ChatBotToggle from "../components/chatbot/buttons/ChatBotToggle";
import Header from "../components/header";
import ThemeRegistry from "../utils/ThemeRegistry";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wade Pate's Portfolio",
  description: "Get to know more about Wade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui-theme" }}>
          <Header>{children as ReactElement}</Header>
          <Box>{children}</Box>
          <ChatBotToggle />
        </ThemeRegistry>
      </body>
    </html>
  );
}
