import React, { Component } from 'react'

import '../Css/Options.css'

export class Options extends Component {

    constructor(props) {
        super(props)

        this.state = {
            city: '',
            category: '',
            bedroom: '',
            type: '',
            action: '',
            offer: ''
        }
    }

    changeOne = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    changeTwo = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    changeThree = (event) => {
        this.setState({
            bedroom: event.target.value
        })
    }

    changeFour = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    changeFive = (event) => {
        this.setState({
            action: event.target.value
        })
    }

    changeSix = (event) => {
        this.setState({
            offer: event.target.value
        })
    }

    submit = () => {
        const {city, category, bedroom, type, action, offer } = this.state
        alert(` Thanks for using our website!!!. You have successfully placed a searched order for 
        city: ${city}
        category: ${category}
        bedroom: ${ bedroom }
        type: ${ type }
        action: ${action}
        offer: ${ offer }
        `)
        
    }



    render() {
        const { city, category, bedroom, type, action, offer } = this.state
        return (


            <>
                <div className="search-container">

                    <div className="search-brand">
                        <h2>search for your home</h2>
                    </div>

                    <div className="option-area">
                        <form onSubmit={this.submit}>

                            <div className="option--one">

                                <select value={city} onChange={this.changeOne}>
                                    <option value="all-cicategories">all cities</option>
                                    <option value="melbourne">Melbourne</option>
                                    <option value="vienna">Vienna</option>
                                    <option value="toronto">Toronto</option>
                                    <option value="calgary">Calgary</option>
                                    <option value="peru">Peru</option>
                                    <option value="abuja">Abuja</option>
                                </select>

                            </div>

                            <div className="option--two">

                                <select value={category} onChange={this.changeTwo}>
                                    <option value="categories">all categories</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="bar">Bar</option>
                                    <option value="house">House</option>
                                    <option value="store">Store</option>
                                </select>

                            </div>

                            <div className="option--three">

                                <select value={bedroom} onChange={this.changeThree}>
                                    <option value="bedrooms">bedrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5+">5+</option>
                                </select>

                            </div>

                            <div className="option--four">

                                <select value={type} onChange={this.changeFour}>
                                    <option value="types">types</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="land">Land</option>
                                    <option value="villa">Villa</option>
                                </select>

                            </div>

                            <div className="option--five">

                                <select value={action} onChange={this.changeFive}>
                                    <option value="action">Actions</option>
                                    <option value="sales">Sales</option>
                                    <option value="bookings">Bookings</option>
                                </select>

                            </div>

                            <div className="option--six">

                                <select value={offer} onChange={this.changeSix}>
                                    <option value="offers">offers</option>
                                    <option value="70%">70% OFF</option>
                                    <option value="50%">50% OFF</option>
                                    <option value="20%">20% OFF</option>
                                </select>

                            </div>

                            <button type='submit'>search</button>
                        </form>

                    </div>

                </div>
            </>
        )
    }
}

export default Options
