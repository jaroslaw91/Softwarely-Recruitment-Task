import React from 'react'
import PropTypes from 'prop-types'
import './Heading.scss'

/**
 * Heading UI component
 * @prop {string} text - heading text
 * @return {object} component with children
 */
const Heading = ({ text }) => {
	const firstWord = text.split(' ')[0]
	const restWord = text.slice(text.indexOf(' ') + 1)

	return (
		<h1 className="heading">
			<span>{firstWord}</span> {restWord}
		</h1>
	)
}

/**
 * Heading display name
 * @type {string}
 */
Heading.displayName = 'Heading'

/**
 * PropTypes
 * @type {object}
 */
Heading.propTypes = {
	/**
	 * text
	 */
	text: PropTypes.string.isRequired
}

export default Heading
