import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav() {
    return (
        <nav>
            <div className="nav_container">
                    <h1 className="title">ToDoList</h1>
                <button className="btn_menu">
                    <FontAwesomeIcon icon='bars'/>
                </button>
            </div>
        </nav>
    )
}

export default Nav
