import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button.js';
import './ContactData.css';
import axios from '../../../Axios-orders.js';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        
        this.setState({loading: true});

        const currentOrder = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Steve',
                mob: '0424380456'
            },
            deliveryMethod: 'Express'
        }

        //sending a post request to the backend
        axios.post('/orders.json', currentOrder)
        .then(response => {
            this.setState({loading: false});
            this.props.history.push("/");
    })
        .catch(error => this.setState({loading:false}));
    }

    render () {
        return (
            <div>
                <h4> Enter your contact data </h4>
                <form>
                    <input className = "Input" type="text" name="name" placeholder="your name"></input>
                    <input className = "Input" type="text" name="email" placeholder="your email"></input>
                    <input className = "Input" type="text" name="street" placeholder="street"></input>
                    <input className = "Input" type="text" name="postal code" placeholder="Postal Code"></input>
                    
                    <Button buttonType = "Success" clicked = {this.orderHandler}>Order</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;