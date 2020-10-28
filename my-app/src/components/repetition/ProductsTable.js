import React from 'react';
import './table.css'
import products from '../../data/products';

export default props => {
    const productsTr = products.map((product, index) => {
        return <tr key={product.id} className={index % 2 == 0 ? 'line' : ''}>
            <td>{product.id}</td>
            <td>{product.product}</td>
            <td>R$ {(product.price).toFixed(2).replace('.',',')}</td>
        </tr>
    })
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {productsTr}
                </tbody>
            </table>
        </div>
    )
};