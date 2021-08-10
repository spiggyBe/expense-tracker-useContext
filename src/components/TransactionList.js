import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext) //destrukturyzacja 

    //console.log(context)

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(el => <Transaction key={el.id} transaction={el} />)}
            </ul>
        </>
    )
}
