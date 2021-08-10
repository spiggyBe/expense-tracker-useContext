import React, { useState } from 'react'

export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')


    const typeText = e => {
        setText(e.target.value)
    }
    const typeAmount = e => {
        setAmount(e.target.value)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
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
