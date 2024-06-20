"use client";
import React, { useEffect, useState } from "react";
import { JsonEditor } from "json-edit-react";
import { useTheme } from "next-themes";

export const JsonViewer = ({
  json,
  collapse = false,
}: {
  json: Record<string, unknown>;
  collapse?: boolean | number;
}) => {
  const { theme } = useTheme();

  return (
    <div>
      <JsonEditor
        data={json}
        restrictEdit={true}
        restrictDelete={true}
        restrictAdd={true}
        collapse={collapse}
        theme={theme === "light" ? "githubLight" : "githubDark"}
      />
    </div>
  );
};
