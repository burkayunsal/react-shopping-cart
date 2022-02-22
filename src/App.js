import React from 'react';
import Items from "./components/Items";
import Cart from './components/Cart';
import Filter from "./components/Filter";
import data from "./data.json";
import store from './Store';
import { Provider } from 'react-redux';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: data.products,
            type: "",
            sort:"",
            cartItems: [],
        }
    }

    minusProductNumber = (product) => {
        let alreadyInChart = true;
        const cartItems = this.state.cartItems.slice();
        if(cartItems.filter(x=>x.added === product.added)) {
            product.count--;
            this.setState({cartItems});
        } 
        else if (alreadyInChart && product.count === 1) {
            this.setState({cartItems:cartItems.filter(x=>x.added !== product.added)});
        }
    }

    plusProductNumber = (product) => {
        const cartItems = this.state.cartItems.slice();
        if(cartItems.filter(x=>x.added === product.added)) {
            product.count++;
        }
        this.setState({cartItems});
    }


    addToBasket = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInChart = false;
        cartItems.forEach(item => {
            if(item.added === product.added) {
                item.count++;
                alreadyInChart = true;
            }
        });
        if (!alreadyInChart) {
            cartItems.push({...product, count: 1});
        }
        this.setState({cartItems});
    }

    sortItems = (event) => {
        const sort = event.target.value;

        this.setState(state => ({
            sort : sort,
            items: this.state.products
            .slice()
            .sort((a, b) =>
                sort === "lowest"
                 ? a.price > b.price ? 1 : -1
                    : sort === "highest"
                        ? a.price < b.price ? 1 : -1
                            : sort === "newest"
                                ? a.added < b.added ? 1 : -1
                                    : a.added > b.added ? 1 : -1
            ),
        }));
    }

    render() {
        return (
            <Provider store={store}>
                <div className="grid-container">
                    <header>
                        Market
                    </header>
                    <main>
                        <div className="content">
                            <div className="filters">
                                <Filter
                                    count={this.state.products.length}
                                    sort={this.state.sort}
                                    sortItems={this.sortItems}
                                />
                            </div>
                            <div className="main">
                                <Items products={this.state.products} addToBasket={this.addToBasket}> </Items>
                            </div>
                            <div className="sidebar">
                                <Cart cartItems={this.state.cartItems}  minusProductNumber={this.minusProductNumber} plusProductNumber={this.plusProductNumber}/>
                            </div>
                        </div>
                    </main>
                    <footer>
                        All rights are reserved.
                    </footer>
                </div>
            </Provider> 
        );
    }
}

export default App;
