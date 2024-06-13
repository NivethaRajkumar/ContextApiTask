import React from 'react';
import { useUserContext } from '../Context/ContextProvider';

function Header() {
    const { cardQuantity, cardAmount } = useUserContext();
    return (
        <header>
            <div className="row bg-light d-flex justify-content-between align-items-center py-3 header">
                <div className="col">TOTAL QTY: {cardQuantity}</div>
                <div className="col">TOTAL PRICE: ${cardAmount.toFixed(2)}</div>
            </div>
        </header>
    );
};

export default Header;
