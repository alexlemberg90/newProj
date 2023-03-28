import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <div className='item'>
                    <img src={this.props.item.img} alt={'image'}/>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                    <b>{this.props.item.price}</b>
                    <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>
            </div>
        );
    }
}

export default Item;