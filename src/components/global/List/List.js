import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import './List.scss'

import { getInputType, hasChecked } from 'helpers/input'
import Input from 'components/ui/Input'

/**
 * List global component
 * @prop {array} data - list data
 * @return {object} component with children
 */
const List = ({ data }) => {
	const [isActiveRadio, setActiveRadio] = useState({})
	const [isActiveCheckbox, setActiveCheckbox] = useState([])

	/**
	 * hasChildren
	 * @type {function}
	 */
	const hasChildren = useCallback(
		subList =>
			subList &&
			subList.map((item, index) => {
				const { id, name, subList } = item

				const color = index % 2 !== 1 ? 'color-1' : 'color-2'

				return (
					<div
						className={`tree-list tree-list__item--line ${
							hasChecked(isActiveRadio, isActiveCheckbox, id, name) &&
							'tree-list__line'
						}`}
						key={uuid()}>
						{renderInput(item, color)}
						{hasChecked(isActiveRadio, isActiveCheckbox, id, name) &&
							hasChildren(subList)}
					</div>
				)
			}),
		[isActiveRadio, isActiveCheckbox]
	)

	/**
	 * renderInput
	 * @type {function}
	 */
	const renderInput = (item, color) => {
		const { id, description, label, name, type } = item

		return (
			<Input
				id={id}
				color={color}
				type={getInputType(type)}
				name={name}
				value={id}
				label={label}
				description={description}
				checked={hasChecked(isActiveRadio, isActiveCheckbox, id, name)}
				onChange={type === 'radio' ? handleOpenRadio : handleOpenCheckbox}
			/>
		)
	}

	/**
	 * handleOpenCheckbox
	 * @type {function}
	 */
	const handleOpenCheckbox = useCallback(
		event => {
			const input = event.target
			const { id } = input

			isActiveCheckbox?.find(element => element === id)
				? setActiveCheckbox(prev => prev.filter(element => element !== id))
				: setActiveCheckbox(prev => [...prev, id])
		},
		[isActiveCheckbox]
	)

	/**
	 * handleOpenRadio
	 * @type {function}
	 */
	const handleOpenRadio = useCallback(
		event => {
			const input = event.target
			const { id, name } = input

			isActiveRadio[name] === id
				? setActiveRadio(prev => ({ ...prev, [name]: null }))
				: setActiveRadio(prev => ({ ...prev, [name]: id }))
		},
		[isActiveRadio]
	)

	return (
		<div className="tree">
			{data.map(item => {
				const { id, name, subList } = item

				return (
					<div
						className={`tree-list ${
							hasChecked(isActiveRadio, isActiveCheckbox, id, name) &&
							'tree-list__line'
						}`}
						key={uuid()}>
						{renderInput(item)}

						{hasChecked(isActiveRadio, isActiveCheckbox, id, name) &&
							hasChildren(subList)}
					</div>
				)
			})}
		</div>
	)
}

/**
 * Heading display name
 * @type {string}
 */
List.displayName = 'List'

/**
 * PropTypes
 * @type {object}
 */
List.propTypes = {
	/**
	 * list data
	 */
	data: PropTypes.array.isRequired
}

export default List
