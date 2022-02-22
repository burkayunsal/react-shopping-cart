import React, {Component} from 'react';
import formatCurrency from "../util";

 class Items extends Component {


	render() {
		return (
			<div>
				{ !this.props.products ? <div>Loading...</div> : (
				<ul className="items">
							{this.props.products.map(product => (
								<li key={product.added}> 
								<div className="item">
									<div className='image-container'>
										<img src='https://via.placeholder.com/140x100' alt={product.name} />
									</div>
									<div className="item-price">
										{formatCurrency(product.price)}
									</div>
									<p className='center'>{product.name}</p>
									<button onClick={() => this.props.addToBasket(product)} className="btn add-button text-bold">Add</button>
								</div>
							</li>
							))}
				</ul>
				)}
			</div>
		);
	}
}

  export default Items;