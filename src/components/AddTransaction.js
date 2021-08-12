import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    const { addTransaction } = useContext(GlobalContext)

    const typeText = e => {
        setText(e.target.value)
    }
    const typeAmount = e => {
        setAmount(e.target.value)

    }

    const onSubmit = e => {
        e.preventDefault()
        setText('')
        setAmount('')

        const newTransaction = {
            id: Math.floor(Math.random() * 987654321),
            text,
            amount: +amount //parsuje na liczby. Mozna tez parsowac innymi sposobami ale ten jest najprostszy i najszybszy
        }

        addTransaction(newTransaction)

    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} placeholder="Enter text..." onChange={typeText} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} placeholder="Enter amount..." onChange={typeAmount} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
