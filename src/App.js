import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            items: [
                    {
                        id:1,
                        title:'карась капчсений',
                        img: 'https://img.povar.ru/main-micro/8c/af/cf/e7/kopchenii_karas-71476.jpg',
                        desc:'цей карась дуже смачний до пива',
                        category: 'fish',
                        price: '29.99'
                    },
                {
                    id:2,
                    title:'карась капчсений',
                    img: 'https://img.povar.ru/main-micro/8c/af/cf/e7/kopchenii_karas-71476.jpg',
                    desc:'цей карась дуже смачний до пива',
                    category: 'fish',
                    price: '29.99'
                }
                ,
                {
                    id:3,
                    title:'карась капчсений',
                    img: 'https://img.povar.ru/main-micro/8c/af/cf/e7/kopchenii_karas-71476.jpg',
                    desc:'цей карась дуже смачний до пива',
                    category: 'fish',
                    price: '29.99'
                }

                ,    {
                    id:4,
                    title:'карась капчсений',
                    img: 'https://img.povar.ru/main-micro/8c/af/cf/e7/kopchenii_karas-71476.jpg',
                    desc:'цей карась дуже смачний до пива',
                    category: 'fish',
                    price: '29.99'
                }
                ,    {
                    id:5,
                    title:'карась капчсений',
                    img: 'https://img.povar.ru/main-micro/8c/af/cf/e7/kopchenii_karas-71476.jpg',
                    desc:'цей карась дуже смачний до пива',
                    category: 'fish',
                    price: '29.99'
                }
                ,    {
                    id:6,
                    title:'карась капчсений',
                    img: 'https://img.povar.ru/main-micro/8c/af/cf/e7/kopchenii_karas-71476.jpg',
                    desc:'цей карась дуже смачний до пива',
                    category: 'fish',
                    price: '29.99'
                }
                ,    {
                    id:7,
                    title:'карась капчсений',
                    img: 'https://img.povar.ru/main-micro/8c/af/cf/e7/kopchenii_karas-71476.jpg',
                    desc:'цей карась дуже смачний до пива',
                    category: 'fish',
                    price: '29.99'
                }
                ,    {
                    id:8,
                    title:'карась капчсений',
                    img: 'https://img.povar.ru/main-micro/8c/af/cf/e7/kopchenii_karas-71476.jpg',
                    desc:'цей карась дуже смачний до пива',
                    category: 'fish',
                    price: '29.99'
                },
                {
                    id:9,
                    title:'карась капчсений',
                    img: 'https://img.povar.ru/main-micro/8c/af/cf/e7/kopchenii_karas-71476.jpg',
                    desc:'цей карась дуже смачний до пива',
                    category: 'fish',
                    price: '29.99'
                }

                ,    {
                    id:10,
                    title:'карась капчсений',
                    img: 'https://img.povar.ru/main-micro/8c/af/cf/e7/kopchenii_karas-71476.jpg',
                    desc:'цей карась дуже смачний до пива',
                    category: 'fish',
                    price: '29.99'
                }
                ,    {
                    id:11,
                    title:'карась капчсений',
                    img: 'https://img.povar.ru/main-micro/8c/af/cf/e7/kopchenii_karas-71476.jpg',
                    desc:'цей карась дуже смачний до пива',
                    category: 'fish',
                    price: '29.99'
                }
                ,    {
                    id:12,
                    title:'карась капчсений',
                    img: 'https://img.povar.ru/main-micro/8c/af/cf/e7/kopchenii_karas-71476.jpg',
                    desc:'цей карась дуже смачний до пива',
                    category: 'fish',
                    price: '29.99'
                }



            ]
        }
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
    }
    render() {
        return (
            <div className='wrapper'>
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items items={this.state.items} onAdd={this.addToOrder}/>
                <Footer/>
            </div>
        );
    }

    chooseCategory(category) {
        console.log(category)
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
        let isInArr = false;
        this.state.orders.forEach(el => {
            if(el.id === item.id)
                isInArr = true;
        })
        if (!isInArr)
        this.setState({orders: [...this.state.orders, item]})
    }
}

export default App;
