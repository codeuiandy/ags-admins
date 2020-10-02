import React from "react";
import "./helpers.css";
export const AppButton = (
	ButtonName,
	buttonWidth,
	buttonHeight,
	buttonColor,
	buttonShadowColor
) => {
	return (
		<button
			style={{
				width: buttonWidth,
				height: buttonHeight,
				color: buttonColor,
				filter: `drop-shadow(2px 4px 6px ${buttonShadowColor})`,
			}}
			className="AppButton"
		>
			{ButtonName}
		</button>
	);
};
