import React from 'react'
import {Component} from 'react'
import './style.css'


class Review extends Component {

    render() {
        const {review} = this.props
        const body = <section>{review.text}</section>
        const mark = <span className="badge-warning rounded-pill text-center" style={{width: 55}}>{review.mark}/10</span>
        const username = <span className='badge-danger rounded-pill text-center'>{review.username}</span>
        return (
            <div className="review_color review_border">
                <div>
                    Пользователь {username} поставил {mark}
                </div>
                <div className='text_margin'>
                    <hr/>
                    {body}
                </div>
            </div>
        )
    }
}

export default Review