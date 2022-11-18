import React from "react";
import { useSelector } from "react-redux";

export const Error: React.FC = () => {
  const errorText = useSelector((state: any) => state.app.error);
  return (
    <div className="collapsible-header">
      <i className="material-icons">favorite</i>
      <p>{errorText}</p>
    </div>
  );
};
