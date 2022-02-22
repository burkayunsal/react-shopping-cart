import React, {Component} from 'react';

class Filter extends Component {
	render() {
		return (
			<div className="filter container">

					<div className="filter-sort">
						<p>Sorting</p>
						<div className="card card-default">
							<div className="card-body">
								<div className="checkbox c-radio m-2">

									<div className="sorting-input">
											<input className="m-2" name="item" type="radio" onClick={this.props.sortItems} value="lowest"/>
											<label htmlFor="item">Price low to high</label>
									</div>

									<div className="sorting-input">
											<input className="m-2" name="item" type="radio" onClick={this.props.sortItems}  value="highest"/>
											<label htmlFor="item">Price high to low</label>
									</div>

									<div className="sorting-input">
											<input className="m-2" name="item" type="radio" onClick={this.props.sortItems} value="newest"/>
											<label htmlFor="item">New to old</label>
									</div>

									<div className="sorting-input">
											<input className="m-2" name="item" type="radio" onClick={this.props.sortItems}  value="oldest"/>
											<label htmlFor="item">Old to new</label>
									</div>

								</div>
							</div>
						</div>
					</div>

					<div className="filter-brands col-md-12">
						<p>Brands</p>
						<div className="card card-default">
							<div className="card-body">
								<input type="text" />
							</div>
						</div>
					</div>

					<div className="filter-tags col-md-12">Tags
						<input />

					</div>

			</div>
		);
	}
}

export default Filter;
