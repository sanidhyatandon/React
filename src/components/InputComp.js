import React, { Component } from "react"

class InputComp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			val: 'Dharmendar'
		}
	}
	render() {
		return (
			<div>
				<input 
					onChange={e => this.setState({val: e.target.value})}
					type="text" placeholder="Enter"
				/>
				<p>Input Value - {this.state.val}</p>
			</div>
		)
	}
}

export default InputComp