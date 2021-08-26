import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'assets/styles/theme.scss'

import data from 'assets/data/list.json'
import List from 'components/global/List'
import Heading from 'components/ui/Heading'

const App = () => (
	<Fragment>
		<Heading text="Softwarely Recruitment Task" />
		<List data={data} />
	</Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'))
