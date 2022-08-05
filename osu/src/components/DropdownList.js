import * as React from "react";
import '@progress/kendo-theme-default/dist/all.css';
import { DropDownList } from "@progress/kendo-react-dropdowns";

export const DropdownList = () => {
  const sizes = [" Work", " Projects", " Contact"];
  const [state, setState] = React.useState({
    value: {
      text: "Football",
      id: 2,
    },
  });

  const handleChange = (event) => {
    setState({
      value: event.target.value,
    });
  };
  return (
    <div>
      <DropDownList
        style={{
          width: "300px",
        }}
        data={sizes}
        defaultItem= "Education"
        // value={state.value}
        // onChange={handleChange}
      />
    </div>
  );
};
