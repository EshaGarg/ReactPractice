import React from 'react';
import { ProductCategory } from '../ProductCategory/ProductCategory';

export function Product(props) {
    return(
                <tr>
                    <td>
                        {props.categoryData.name}
                    </td>
                    <td>
                        {props.categoryData.price}
                    </td>
                </tr>
    )
}