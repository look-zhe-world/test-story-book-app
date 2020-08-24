import React from "react";
import { GlobalStyle } from "../src/components/shared/global";
import { addDecorator, addParameters, configure, module } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

addParameters({
	options: {
		showRoots: true,
	},
	dependencies: {
		withStoriesOnly: true,
		hideEmpty: true,
	},
});
addDecorator(withA11y);
addDecorator((story) => (
	<>
		<GlobalStyle />
		{story()}
	</>
));


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}


// const loaderFn = () => {
// 	return [
// 		require("../src/stories/Welcome.stories.mdx"),
// 		require("../src/stories/color.stories.mdx"),
// 		....
// 		....
// 		....
// 		...
// 	];
// };
// configure(loaderFn, module);