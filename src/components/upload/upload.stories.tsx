// import React from 'react';
// import { withKnobs, text, boolean, select, number, color } from "@storybook/addon-knobs";
// import { Button } from '../button';
// import { Upload } from './index';
// import { Icon } from '../icon';

// export default {
// 	title: "Upload",
// 	component: Upload,  // 用处是什么
// 	decorators: [withKnobs],
// };


// export const basicUpload = () => (
// 	<div>
// 		<Upload  uploadMode="img" progress max={3} multiple={false}/>
// 		{/* <Upload  uploadMode="default" progress max={3} multiple={false}/> */}
// 	</div>
// );
import React from "react";
import { Upload } from "./index";
import {
	withKnobs,
	text,
	boolean,
	select,
	number,
} from "@storybook/addon-knobs";
import { Method, AxiosRequestConfig } from "axios";
import { action } from "@storybook/addon-actions";

export default {
	title: "Upload",
	component: Upload,
	decorators: [withKnobs],
};

const methods: Method[] = [
	"get",
	"GET",
	"delete",
	"DELETE",
	"head",
	"HEAD",
	"options",
	"OPTIONS",
	"post",
	"POST",
	"put",
	"PUT",
	"patch",
	"PATCH",
	"link",
	"LINK",
	"unlink",
	"UNLINK",
];

export const knobsUpload = () => {
	const uploadMode = select("uploadMode", ["default", "img"], "default");
	const axiosConfig: Partial<AxiosRequestConfig> = {
		url: text("url", "http://localhost:51111/user/uploadAvatar/"),
		method: select("method", methods, "post"),
	};
	const uploadFilename = text("uploadFilename", "avatar");

	return (
		<Upload
			multiple={boolean("multiple", false)}
			accept={text("accept", "*")}
			slice={boolean("slice", true)}
			progress={boolean("progress", false)}
			max={number("max", 100)}
			onProgress={action("onProgress")}
			onRemoveCallback={action("onRemoveCallback")}
			uploadFilename={uploadFilename}
			axiosConfig={axiosConfig}
			uploadMode={uploadMode}
		></Upload>
	);
};

export const imgUpload = () => <Upload uploadMode="img"></Upload>;

export const progressUpload = () => <Upload progress={true}></Upload>;