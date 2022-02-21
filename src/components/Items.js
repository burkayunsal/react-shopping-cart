import React, {Component} from 'react';
import {connect} from "react-redux";
import formatCurrency from "../util";

class Items extends Component {
	render() {
		const { items } = this.props;
		return (
			<div>
				<ul className="items">
					{items.map( (item) => (
						<li key={item.added}>
							<div className="item">
								<div className='image-container'>
									<img src='https://via.placeholder.com/140x100' alt="item" />
								</div>
								<div className="item-price">
									 {formatCurrency(item.price)}
								</div>
								<p>{item.name}</p>
								<button className="button primary">Add</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const {items} = state;
	return {items}
}

export default connect(mapStateToProps)(Items);
