/**
 * getInputType
 * @prop {array} type - input type
 * @return {string} return input type
 */
export const getInputType = type => {
	switch (type) {
		case 'radio':
			return 'radio'
		case 'checkbox':
			return 'checkbox'
		default:
			return ''
	}
}

/**
 * hasChecked
 * @prop {array} stateRadio - radio input state
 * @prop {array} stateCheckbox - checkbox input state
 * @prop {array} id - element id
 * @prop {array} name - element name
 * @return {bool} return true/false
 */
export const hasChecked = (stateRadio, stateCheckbox, id, name) =>
	stateRadio[name] === id || !!stateCheckbox.find(element => element === id)
