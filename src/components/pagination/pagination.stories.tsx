import React from 'react';
import { withKnobs, text, boolean, select, number, color } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Pagination } from './index';
import { Icon } from '../icon'

export default {
	title: "Pagination",
	component: Pagination,
	decorators: [withKnobs],
};

// export const basicPagination = () => <Pagination defaultCurrent={11}></Pagination>;

export const knobsPagination = () => (
	<Pagination
		defaultCurrent={number("defualtCurrent", 1)}
		total={number("total", 100)}
		barMaxSize={number("barMaxSize", 5)}
		pageSize={number("pageSize", 5)}
		callback={action("callback")}
	></Pagination>
);
