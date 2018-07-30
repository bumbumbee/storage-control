import React from 'react';

const Statistics = (props) => {

    const countCatItems = (cat) => {
        return props.items.filter((item) => {
            return item.category === cat
        })
    };


    const total = props.items.reduce((total, item) => {
        return total + item.quantity
    }, 0);

    const categories = props.categories.map((cat, i) => {
        return (
            <li
                key={i}
                className="cat-list">
                {cat}: {countCatItems(cat).length}
            </li>
        );
    });
    console.log(categories);


    return (
        <div>
            <h4 className="title">Total items: {total}</h4>
            <div className="content">
                <div>
                    <h5>Types in each category</h5>
                    <ul className="ul-cat">
                        {categories}
                    </ul>
                </div>

            </div>
        </div>
    );
};
export default Statistics