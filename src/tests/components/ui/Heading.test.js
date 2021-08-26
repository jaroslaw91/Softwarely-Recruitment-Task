import React from 'react'
import { shallow } from 'enzyme'
import Heading from 'components/ui/Heading'

describe('<Heading /> test', () => {
	let wrapper

	const props = {
		text: 'Softwarely Recruitment Task'
	}

	wrapper = shallow(<Heading {...props} />)

	it('<Heading /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})

	it('expect <h1 /> text `Softwarely`', () => {
		expect(wrapper.find('h1').text()).toEqual('Softwarely Recruitment Task')
	})
})
