import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, addClass}) {
  return (
    <div className={className}>
      <a className={addClass ? `main-button ${className}`:"main-button"}  href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
