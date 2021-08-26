export const dataRadio = [
	{
		id: '1',
		label: 'Nagłówek drzewa',
		description: 'wielowierszowy',
		type: 'radio',
		subList: [
			{
				id: '1.1',
				label: 'Pododdział 1',
				type: 'radio',
				name: 'name1',
				subList: [
					{
						id: '1.1.1',
						label: 'Pododdział 1',
						type: 'radio',
						name: 'name1'
					}
				]
			},
			{
				id: '1.2',
				label: 'Pododdział 2',
				type: 'radio',
				name: 'name1'
			}
		]
	}
]

export const dataCheckbox = [
	{
		id: '1',
		label: 'Nagłówek drzewa',
		description: 'wielowierszowy',
		type: 'checkbox',
		subList: [
			{
				id: '1.1',
				label: 'Pododdział 1',
				type: 'radio',
				name: 'name1',
				subList: [
					{
						id: '1.1.1',
						label: 'Pododdział 1',
						type: 'radio',
						name: 'name1'
					}
				]
			}
		]
	}
]

export const dataNone = [
	{
		id: '1',
		label: 'Nagłówek drzewa',
		description: 'wielowierszowy'
	}
]
