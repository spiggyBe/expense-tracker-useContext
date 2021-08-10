import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {

    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(el => el.amount)

    const totalBalance = amounts.reduce((prev, next) => (prev += next), 0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1 >${totalBalance}</h1>
        </>
    )
}
