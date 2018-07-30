import React, {Component} from 'react';
//import axios from 'axios'
import Header from "./components/Header";
import Items from "./components/Items";
import AddItems from "./components/AddItems";
import Categories from "./components/Categories";
import Statistics from "./components/Statistics";
import Sidebar from "./components/Sidebar";

class App extends Component {
    state = {
        items: JSON.parse(localStorage.getItem('items')) ? JSON.parse(localStorage.getItem('items')) : [
            {
                "name": "Monitor Dell Professional 19\" P1907 5:4 ",
                "category": "monitor",
                "inStock": true,
                "quantity": 12,
                "price": 44.89
            },
            {
                "name": "Dell S2718H 27\" , IPS, Full HD, 1920 x 1080 ",
                "category": "monitor",
                "inStock": true,
                "quantity": 4,
                "price": 234.5
            },
            {
                "name": "Dell S2718D 27\" , IPS, 2560 x 1440 pixels, ",
                "category": "monitor",
                "inStock": false,
                "quantity": 0,
                "price": 289.9
            },
            {
                "name": "KEYBOARD MK120 RUS/DESKTOP 920-002561 LOGITECH",
                "category": "keyboard",
                "inStock": false,
                "quantity": 0,
                "price": 23.35
            },
            {
                "name": "Logitech K120 wired, USB, Keyboard ",
                "category": "keyboard",
                "inStock": true,
                "quantity": 7,
                "price": 15.82
            },
            {
                "name": "MOUSE USB OPTICAL WRL M171/RED ",
                "category": "mouse",
                "inStock": true,
                "quantity": 4,
                "price": 11.8
            },
            {
                "name": "MOUSE USB OPTICAL WRL B330/SILENT ",
                "category": "mouse",
                "inStock": true,
                "quantity": 2,
                "price": 28.8
            },
            {
                "name": "Corsair Optical M65 PRO ",
                "category": "mouse",
                "inStock": false,
                "quantity": 0,
                "price": 53.9
            },
            {
                "name": "Corsair M65 PRO RGB FPS ",
                "category": "mouse",
                "inStock": true,
                "quantity": 4,
                "price": 53.1
            }
        ],
        nav: ['items', 'add item', 'categories', 'statistics'],
        categories: JSON.parse(localStorage.getItem('categories')) ? JSON.parse(localStorage.getItem('categories')) : ['keyboard', 'laptop', 'monitor', 'mouse'],
        activeNav: 'items',
        activeCat: 'all'
    };


    // componentDidMount = async () => {
    //     const url = "https://enigmatic-cliffs-25405.herokuapp.com/tools";
    //     const response = await axios.get(url);
    //     console.log(response);
    //     this.setState({items: response.data.tools})
    // };
    removeCat = (cat) => {
        console.log(cat);
        const newCats = this.state.categories.filter((category) => {
            return cat !== category
        });
        localStorage.setItem('categories', JSON.stringify(newCats));
        console.log(newCats);

        const newItems = this.state.items.filter((item) => {
            return cat !== item.category
        });
        console.log(newItems);

        this.setState({categories: newCats, items: newItems})
    };

    addCat = (cat) => {
        console.log(cat);
        const newCats = [...this.state.categories, cat.name];
        console.log(newCats);
        localStorage.setItem('categories', JSON.stringify(newCats));
        this.setState({categories: newCats})
    };

    switchCat = (cat) => {
        console.log(cat);
        this.setState({activeCat: cat})
    };

    addItem = (item) => {
        console.log(item);
        const newItems = [...this.state.items, item];
        localStorage.setItem('items', JSON.stringify(newItems));
        this.setState({items: newItems})
    };

    deleteItem = (name) => {
        const newItems = this.state.items.filter((item) => {
            return item.name !== name
        });
        localStorage.setItem('items', JSON.stringify(newItems));
        this.setState({items: newItems});
    };

    switchNav = (active) => {
        return this.setState({activeNav: active})
    };


    render() {
        const content = () => {
            switch (this.state.activeNav) {
                case this.state.nav[0] :
                    return (
                        <Items
                            addItem={this.addItem}
                            deleteItem={this.deleteItem}
                            activeCat={this.state.activeCat}
                            items={this.state.items}/>
                    );
                case this.state.nav[1]:
                    return (
                        <AddItems
                            addItem={this.addItem}
                            categories={this.state.categories}
                        />
                    );
                case this.state.nav[2]:
                    return (
                        <Categories
                            removeCat={this.removeCat}
                            addCat={this.addCat}
                            categories={this.state.categories}
                        />
                    );
                case this.state.nav[3]:
                    return (
                        <Statistics
                            categories={this.state.categories}
                            items={this.state.items}
                        />
                    );
                default:
                    return null
            }
        };

        return (
            <div className="app">
                <Header
                    switchNav={this.switchNav}
                    nav={this.state.nav}
                    activeNav={this.state.activeNav}
                />
                <div className="wrapper">
                    <Sidebar
                        activeCat={this.state.activeCat}
                        switchCat={this.switchCat}
                        categories={this.state.categories}
                    />
                    {content()}
                </div>
            </div>
        );
    }
}

export default App;
