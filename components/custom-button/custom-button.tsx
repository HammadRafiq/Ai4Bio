import { Button } from "@mui/material";
import React from "react";
import { styles } from "./custom-button-style";

const CustomButton = (props: any) => {
  const {variant, buttonTitle, padding, fontSize} = props;
  const buttonStyle = styles.customButtonStyle(padding, fontSize);
  return (
    <div>
      <Button variant={variant} sx={buttonStyle}>{buttonTitle}</Button>
    </div>
  );
};

export default CustomButton;
