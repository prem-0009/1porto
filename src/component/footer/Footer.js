import { useState } from "react";
import Badge from "@mui/material/Badge";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import "./footer.css";

const Footer = () => {
  const [copyText, setCopyText] = useState("email");
  const [copySuccess, setCopySuccess] = useState("");

  const handleFlip = () => {
    setCopyText("prem.sherpa890@gmail.com");

    setTimeout(() => {
      setCopyText("email");
    }, 6000);
  };

  const handleIconClick = (e) => {
    setCopyText("prem.sherpa890@gmail.com");

    navigator.clipboard.writeText(copyText);
    setCopySuccess("copied");

    setTimeout(() => {
      setCopySuccess("");
    }, 500);
  };

  const Email = () => {
    return (
      <div className="home-footer" onClick={handleFlip}>
        {copyText === "email" ? (
          copyText
        ) : (
          <div className="email-footer">
            <span>{copyText}</span>&nbsp;&nbsp;
            <Badge badgeContent={copySuccess} sx={{ padding: "1px" }}>
              <ContentCopyIcon
                fontSize="small"
                onClick={(e) => handleIconClick(e)}
              />
            </Badge>
          </div>
        )}
      </div>
    );
  };

  return <Email />;
};

export default Footer;
