import React from 'react'
import Vinush from "../Vinush/Vinush"
import './style.css'

export default function VinushList({vinushes}){
    const vinushElements = vinushes.map(vinush=>
    <li key = {vinush.id} className="vinush-list__li li_margin">
        <Vinush vinush={vinush}/>
    </li>
    )
    return(
        <ul>
            {vinushElements}
        </ul>
    )
}