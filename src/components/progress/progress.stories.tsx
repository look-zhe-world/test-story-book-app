import React from 'react';
import { withKnobs, text, boolean, select, number, color } from "@storybook/addon-knobs";
import { Progress } from './index';
import { Icon } from '../icon'

export default {
	title: "Progress",
	component: Progress,
	decorators: [withKnobs],
};

export const basicProgress = () => <Progress count={20}></Progress>;

export const test = () => <Progress count={20} circle={true}></Progress>;

export const knobsProgress = () => (
	<Progress
		count={number("count", 50, { range: true, min: 0, max: 100, step: 1 })}
		countNumber={boolean("countNumber", true)}
		height={number("height", 8)}
		circle={boolean("circle", false)}
		size={number("size", 100)}
		primary={color("primary", "#FF4785")}
		secondary={color("secondary", "#FFAE00")}
		bottomColor={color("bottomColor", "#DDDDDD")}
		flashColor={color("flashColor", "#FFFFFF")}
		progressText={text("progressText", "")}
	></Progress>
);

export const circle = () => <Progress count={80} circle={true}></Progress>;

export const progressText = () => (
	<Progress count={11} progressText={"yehuozhili"}></Progress>
);

export const changeColor = () => (
	<Progress
		count={20}
		primary="blue"
		secondary="yellow"
		bottomColor="brown"
	></Progress>
);

export const withIcon = () => (
	<Progress
		count={11}
		progressText={
			<span>
				<Icon icon="admin"></Icon>
			</span>
		}
	></Progress>
);