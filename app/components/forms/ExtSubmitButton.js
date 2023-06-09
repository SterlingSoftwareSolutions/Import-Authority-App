import React from "react";
import CustomButton from "../CustomButton";

function ExtSubmitButton({ title, alignSelf, style, onPress }) {
    return (
        <CustomButton
            title={title}
            onPress={onPress}
            alignSelf={alignSelf}
            style={style}
        />
    );
}

export default ExtSubmitButton;
