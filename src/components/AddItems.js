import React from 'react';

class AddItems extends React.Component {

    addItem = (e) => {
        e.preventDefault();
        const item = {
            name: e.target.name.value,
            category: e.target.category.value,
            quantity: parseFloat(e.target.quantity.value),
            price: parseFloat(e.target.price.value)
        };
        this.props.addItem(item);
        e.target.reset()
    };

    render() {
        console.log(this.props.categories);
        const categories = this.props.categories.map((category, i) => {
            return (
                <option key={i}
                >{category}</option>
            );
        });


        return (
            <div>
                <h4 className="title">Add Item</h4>
                <div className="content">
                    <form onSubmit={this.addItem}>
                        <input className="form-item" type="text" placeholder="Name" name='name'/>
                        <select className="form-item" name="category">{categories}</select>
                        <input className="form-item" type="number" placeholder="Quantity" name="quantity"/>
                        <input className="form-item" type="number" placeholder="Price" name="price"/>
                        <button>Add</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default AddItems