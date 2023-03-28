import {useEffect, useState} from "react";
import Order from "./Order";

const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(el => sum += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                <Order key={el.id} item={el} onDelete={props.onDelete} />
            ))}
            <p className='sum'>Сумма : {new Intl.NumberFormat().format(sum)}</p>
        </div>
    )
}

const showNothing = () => {
    return(
        <div className='empty'>
            <h2>
            Товарів Немає
            </h2>
        </div>
    )
}

export default function Header(props) {
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
                <div onClick={() => setCartOpen(cartOpen = !cartOpen)}
                     className={`shop-cart-button ${cartOpen && 'active'}`}>кошик
                </div>

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                        showOrders(props) : showNothing()
                        }
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    );
}