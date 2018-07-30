import React from 'react';

const Sidebar = (props) => {

    const categories = props.categories.map((category, i) => {
        return (
            <li key={i}
                className={props.activeCat === category ? "tab active" : "tab"}
                onClick={() => props.switchCat(category)}>
            {category}s</li>
        );
    });

    return (
        <div className="sidebar">
            <h4>Categories</h4>
            <ul className="sidebar-ul">
                {categories}
                <li
                    className={props.activeCat === "all" ? "tab active" : "tab"}
                    onClick={() => props.switchCat('all')}
                >All
                </li>
            </ul>
        </div>
    );
};
export default Sidebar