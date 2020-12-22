import React from 'react'
import {Component} from 'react'
import ShowButton from '../Show_button'
import ReviewList from "../Review_list/Review_list";
import './style.css'


class Vinush extends Component {


    render() {
        const {vinush} = this.props
        const image = require('../../images/' + vinush.img).default
        const body = <section className='card-text'>{vinush.text}</section>
        return (
            <div className='card mx-auto'>
                <img src={image} className='card-img-top vinush_img' />
                <div className='card-title bg_pink rounded'>
                    <h2 className="mx-3">{vinush.title}</h2>
                </div>
                <div className='card-body'>
                    {body}
                </div>


                <div className='card-footer footer_background'>

                    <ReviewList reviews={vinush.reviews}/>
                    <ShowButton/>
                </div>
            </div>
        )
    }
}

export default Vinush