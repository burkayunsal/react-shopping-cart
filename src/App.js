import React from 'react';
import items from './items.json';
import companies from './companies.json';
import Items from "./components/Items";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            items,
            type: "",
            sort:"",
        }
    }

    render() {
        return (
            <div className="grid-container">
                <header>
                    <a href="/">React Product Listing App</a>
                </header>
                <main>
                    <div className="content">
                        <div className="main">
                            <Items items={this.state} />
                        </div>
                        <div className="sidebar">
                            Cart Items
                        </div>
                    </div>
                </main>
                <footer>
                    All rights are reserved.
                </footer>
            </div>
        );
    }
}

export default App;
