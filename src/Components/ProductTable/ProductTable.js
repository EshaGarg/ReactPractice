import React, { Fragment } from 'react';
import { Product } from '../Product/Product';
import { ProductCategory } from '../ProductCategory/ProductCategory';

export function ProductTable(props) {
    const categoryObject = {};
    for (let product of props.products) {
        if (categoryObject.hasOwnProperty(product.category)) {
            categoryObject[product.category].push(product);
        } else {
            categoryObject[product.category] = [product];
        }
    }
    return(
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {
                Object.keys(categoryObject).map((category, key) => (
                    <>
                    <tr>
                        <ProductCategory key={key} category={category} />
                    </tr>
                        {
                            categoryObject[category].map((categoryData, key1) => (
                                <Product key={key1} category={category} categoryData={categoryData} />
                            ))
                        }
                        </>
                ))
            }
            </tbody>
        </table>
    )
}