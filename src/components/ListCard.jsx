import React from 'react'

function ListCard() {
    return (
            <div className="list_container">
                <div className="card">
                    <div className="card_info">
                        <h2 className="card_title">Laundry</h2>
                        <p className="card_description">Use different detergent</p>
                    </div>
                    <input type="checkbox" className="finished"/>
                </div>
            </div>
    )
}

export default ListCard
