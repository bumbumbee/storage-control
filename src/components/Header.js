import React from 'react';

const Header = (props) => {

    const nav = props.nav.map((item, i) => {
            return <li
                onClick={() => {
                    props.switchNav(item)
                }}
                key={i}
                className={props.activeNav === item ? "tab active" : "tab"}>
                {item}</li>
        }
    );

    return (
        <header>
            <h2>Storage</h2>
            <ul className="links">
                {nav}
            </ul>
        </header>
    );
};
export default Header