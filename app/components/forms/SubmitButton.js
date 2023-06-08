import React from "react";
import { useFormikContext } from "formik";

import CustomButton from "../CustomButton";

function SubmitButton({ title, alignSelf, style }) {
  const { handleSubmit } = useFormikContext();

  return (
    <CustomButton
      title={title}
      onPress={handleSubmit}
      alignSelf={alignSelf}
      style={style}
    />
  );
}

export default SubmitButton;
