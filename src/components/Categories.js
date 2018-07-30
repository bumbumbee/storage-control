import React from 'react';

class Categories extends React.Component {

    addCategory = (e) => {
        e.preventDefault();
        const cat = {
            name: e.target.name.value
        };
        this.props.addCat(cat);
        e.target.reset()
    };

    render() {

        const categories = this.props.categories.map((category, i) => {
            return (
                <li key={i}
                    className="cat-list"
                >{category}s
                    <sup onClick={() => this.props.removeCat(category)}> x</sup>
                </li>
            );
        });

        return (
           <div>
               <h4 className="title">Add Category</h4>
               <div className="content">
                   <form onSubmit={this.addCategory}>
                       <input className="form-item" type="text" placeholder="Name" name='name'/>
                       <button>Add</button>
                   </form>
                   <h5>All categories:</h5>
                   <ul className="ul-cat">
                       {categories}
                   </ul>
               </div>
           </div>
        );
    }
}

export default Categories