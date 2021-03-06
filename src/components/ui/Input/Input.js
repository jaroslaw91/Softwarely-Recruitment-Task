import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

import { FiPlus, FiMinus } from 'react-icons/fi'

/**
 * Input UI component
 * @prop {string} label - label name
 * @prop {string} description - label description, default: `''`
 * @prop {string} type - type of input, default: `''`
 * @prop {string} id - input id
 * @prop {string} color - label color
 * @prop {string} name - input name
 * @prop {string} value - input value
 * @prop {bool} checked - input is checked, default: `false`
 * @prop {func} onChange - input on change, default: `() => null`
 * @return {object} component with children
 */
const Input = ({
	label,
	description,
	type,
	id,
	name,
	color,
	value,
	checked,
	onChange
}) => (
	<label className="input">
		{type && (
			<Fragment>
				<input
					className="input__input"
					type="checkbox"
					id={id}
					name={name}
					value={value}
					checked={checked}
					onChange={onChange}
				/>

				<div className={`input__fake input__fake--${type}`}>
					{checked ? <FiMinus /> : <FiPlus />}
				</div>
			</Fragment>
		)}

		<span
			className={`input__${color} ${
				type ? 'input__label' : 'input__label--nomargin'
			}`}>
			{label}
			<span className={`input__label--description input__${color}`}>
				{description}
			</span>
		</span>
	</label>
)

/**
 * Heading display name
 * @type {string}
 */
Input.displayName = 'Input'

/**
 * PropTypes
 * @type {object}
 */
Input.propTypes = {
	/**
	 * list data
	 */
	label: PropTypes.string.isRequired,
	description: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.string.isRequired,
	color: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	onChange: PropTypes.func
}

/**
 * Default PropTypes
 * @type {object}
 */
Input.defaultProps = {
	color: 'color-1',
	name: '',
	description: '',
	type: '',
	checked: false,
	onChange: () => null
}

export default Input
