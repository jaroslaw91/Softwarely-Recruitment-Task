import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/styles/theme.scss'

import data from 'assets/data/list.json'
import List from 'components/global/List'

const App = () => (
	<div>
		Softwarely Recruitment Task
		<List data={data} />
	</div>
)

ReactDOM.render(<App />, document.getElementById('root'))
