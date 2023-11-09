"use client";
import { Slide, useScrollTrigger } from "@mui/material";

export interface HideOnScrollProps {
  children: React.ReactElement;
}

export default function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
