import React from 'react'
import { shallow } from 'enzyme'
import Input from './../../../components/ui/Input'

describe('<Input /> test 1', () => {
	let wrapper

	const props = {
		label: 'Label',
		description: 'Description',
		type: 'radio',
		id: '1',
		name: 'name',
		value: '1',
		checked: false
	}

	wrapper = shallow(<Input {...props} />)

	it('<Input /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})

	it('expect <FiPlus />', () => {
		expect(wrapper.find('FiPlus').exists()).toBe(true)
	})

	it('expect class `.input__label`', () => {
		expect(wrapper.find('.input__label').exists()).toBe(true)
	})
})

describe('<Input /> test 2', () => {
	const props = {
		label: 'Label',
		description: 'Description',
		type: '',
		id: '1',
		name: 'name',
		value: 'value',
		checked: true,
		onChange: () => null
	}

	const wrapper = shallow(<Input {...props} />)

	it('<Input /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})

	it('expect class `.input__label--nomargin`', () => {
		expect(wrapper.find('.input__label--nomargin').exists()).toBe(true)
	})
})

describe('<Input /> test 3', () => {
	const props = {
		label: 'Label',
		description: 'Description',
		type: 'checkbox',
		id: '1',
		name: 'name',
		value: 'value',
		checked: true,
		onChange: () => null
	}

	const wrapper = shallow(<Input {...props} />)

	it('<Input /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})

	it('expect <FiMinus />', () => {
		expect(wrapper.find('FiMinus').exists()).toBe(true)
	})
})
