import React from 'react'
import { shallow } from 'enzyme'
import List from 'components/global/List'
import { data } from './helpers/fixtureList'

describe('<List /> test 1', () => {
	let wrapper

	const props = {
		data: data
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
})
