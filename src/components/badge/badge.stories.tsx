
import React from 'react';
import {
	withKnobs,
	text,
	boolean,
	select,
} from "@storybook/addon-knobs";
import Badge, { BadgeProps, badgeColor } from './index';

type selectType = "positive" | "negative" | "neutral" | "warning" | "error";

export default {
	title: "Badge",
	component: Badge,
	decorators: [withKnobs],
};

export const knobsBadge = () => (
	<Badge
		status={select<BadgeProps["status"]>(
			"status",
			Object.keys(badgeColor) as selectType[],
			"neutral"
		)}
	>
		{text("children", "i am badge")}
	</Badge>
);