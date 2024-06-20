import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import React from "react";

export const Code = () => {
  const codeString = "(num) => num + 1";

  return (
    <SyntaxHighlighter language="javascript" style={darcula}>
      {codeString}
    </SyntaxHighlighter>
  );
};
