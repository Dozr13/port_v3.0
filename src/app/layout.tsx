import { Box } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/header";
import ThemeRegistry from "../utils/ThemeRegistry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wade Pate's Portfolio",
  description: "Generated by create next app, customized by yours truly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Box id="sentinel" style={{ height: "1px", width: "100%" }}></Box> */}
        <ThemeRegistry options={{ key: "mui-theme" }}>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
