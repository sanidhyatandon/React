import React from "react"

class Hello extends React.Component {
	render() {
		const name = this.props.name
		return (
			<h1 className="name">Hello {name}!</h1>
		)
	}
}

export default Hello