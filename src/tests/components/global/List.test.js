import React from 'react'
import { shallow } from 'enzyme'
import List from 'components/global/List'
import { dataRadio, dataCheckbox, dataNone } from './helpers/fixtureList'

describe('<List /> test 1', () => {
	let wrapper

	const props = {
		data: dataCheckbox
	}

	wrapper = shallow(<List {...props} />)

	it('<List /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})

	it('expect class `tree-list false', () => {
		expect(wrapper.find('.tree-list').at(0).prop('className')).toBe(
			'tree-list false'
		)
	})

	it('Input change simulate', () => {
		const input = wrapper.find('Input')

		input.simulate('change', { target: { id: '1' } })

		expect(wrapper.find('.tree-list').at(0).prop('className')).toBe(
			'tree-list tree-list__line'
		)
	})
})

describe('<List /> test 2', () => {
	let wrapper

	const props = {
		data: dataRadio
	}

	wrapper = shallow(<List {...props} />)

	it('<List /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})

	it('Input change simulate', () => {
		const input = wrapper.find('Input')

		input.simulate('change', { target: { id: '1' } })

		expect(wrapper.find('.tree-list').at(0).prop('className')).toBe(
			'tree-list tree-list__line'
		)
	})

	it('Input change simulate', () => {
		const input = wrapper.find('Input').at(1)

		input.simulate('change', { target: { id: '1.1', name: 'name1' } })

		expect(
			wrapper
				.find('.tree-list')
				.at(0)
				.find('.tree-list')
				.at(0)
				.prop('className')
		).toBe('tree-list tree-list__line')
	})
})

describe('<List /> test 3', () => {
	let wrapper

	const props = {
		data: dataNone
	}

	wrapper = shallow(<List {...props} />)

	it('<List /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})
