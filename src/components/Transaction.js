import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+'


    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span> {/* Math.abs daje zawsze pozytywne liczby poniewaz bez tej funkcji bylby podwójny minus przed wartoscia */}
            <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}


/*
export const Transaction = (props) => { zdestrukturyzowac propsy --> efekt powyzej



    return (
        <li className='minus'>
            {props.transaction.text}
            <span>{props.transaction.amount}</span>
            <button>x</button>
        </li>
    )
} */
