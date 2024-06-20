"use client";
import React, { ReactNode } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#6366f1"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};
