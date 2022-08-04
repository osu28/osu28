import * as React from "react";
import * as ReactDOM from "react-dom";
import '@progress/kendo-theme-default/dist/all.css';
import { DropDownList } from "@progress/kendo-react-dropdowns";

export const DropdownList = () => {
  const sizes = [" Work", " Projects", " Contact"];
  return (
    <div>
      <DropDownList
        style={{
          width: "300px",
        }}
        data={sizes}
        defaultItem= "Education"
      />
    </div>
  );
};
