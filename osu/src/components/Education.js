import React from "react";

export const Education = () => {
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