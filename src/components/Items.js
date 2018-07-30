import React from 'react';

const Items = (props) => {

    const filtered = props.items.filter((item) => {
        if (props.activeCat === 'all') return item;
        else return props.activeCat === item.category;
    });
    console.log(filtered);

    const items = filtered.map((item, i) => {
        return (
            <tr key={i}>
                <td className="td-name">{item.name}</td>
                <td className="td-cat">{item.category}</td>
                <td className="td-quantity">{item.quantity} pcs</td>
                <td className="td-price">{item.price} €</td>
                <td className="td-del"
                    onClick={() => props.deleteItem(item.name)}
                ><span>x</span>
                </td>
            </tr>
        )
    });

    return (
        <div className="content">
            <table>
                <tbody>
                {items}
                </tbody>
            </table>
        </div>
    );
};
export default Items