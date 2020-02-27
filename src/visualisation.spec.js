import React from 'react';
import { shallow } from 'enzyme';
import Visualisation from './visualisation';
import { Table } from '@inseefr/wilco';

const roles = [{ id: 'id', label: 'label', persons: [] }];

describe('administration-visualisation-roles', () => {
	it('renders without crashing', () => {
		shallow(<Visualisation roles={roles} />);
	});

	it('should display a Table with the right data prop', () => {
		const roles = [
			{
				label: 'label',
				persons: [
					{
						label: 'plabel',
						stamp: 'pstamp',
					},
				],
			},
		];
		const container = shallow(<Visualisation roles={roles} />);
		expect(container.find(Table).props().data).toEqual([
			{
				label: 'plabel',
				roles: 'label',
				stamp: 'pstamp',
			},
		]);
	});

	it('should define an empty arry for roles when it is undefined', () => {
		const container = shallow(<Visualisation />);
		expect(container.find(Table).props().data).toEqual([]);
	});
});