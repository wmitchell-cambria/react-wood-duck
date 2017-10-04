import React from "react";
import PropTypes from "prop-types";

class SideNav extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const classField = `container col-md-${this.props.columnWidth}`;
		if(!this.props.content) { 
			return null;
		} else { 
			return (
	         		<div className={classField}>
					<div className="row">
						<span> Sample Side Nav </span>
						<ul className="nav nav-stacked">
							<li className="active"><a href="#">Test Item 0</a></li>
        	       					<li><a href="#">Test Item 1</a></li>
        	     					<li><a href="#">Test Item 2</a></li>
		    				</ul>
					</div>
				</div>
			);
		}
	}
}

SideNav.PropTypes = {
	content: PropTypes.string,
	columnWidth: PropTypes.number
}

SideNav.defaultProps = {
	content: "",
	columnWidth: 3
}

module.exports = SideNav;
