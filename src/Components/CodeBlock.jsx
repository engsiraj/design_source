import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-one-light.css";

const  CodeBlock = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
export default CodeBlock