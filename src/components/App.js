import React from "react"

import Hello from './Hello'
import InputComp from './InputComp'

const friends = [
	'Arpit',
	'Shubham',
	'Rahul'
]	

// key is an internal property of react.js

class App extends React.Component {
	render() {
		const renderedFriends = friends.map((friend, i) => <Hello key={i} name={friend} />)
		return (
			<div>
				{ renderedFriends } 
				<InputComp />
			</div>
		)
	}
}

export default App