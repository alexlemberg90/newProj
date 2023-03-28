import React, {Component} from 'react';

class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={this.props.item.img} alt={'image'}/>
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price}</b>
                <div className='delete' onClick={() => this.props.onDelete(this.props.item.id)}>Видалити</div>
            </div>
        );
    }
}

export default Order;