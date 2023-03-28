import {useEffect, useState} from "react";

export default function Header() {
    let [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
    }, []);

    return (<header>
            <div>
                <span className='logo'>UA Shop</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Відгуки</li>
                    <li>Кабінет</li>
                </ul>
                <div onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}>кошик</div>

                {cartOpen && (
                    <div className='shop-cart'>

                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    );
}