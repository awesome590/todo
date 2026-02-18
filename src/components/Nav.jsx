import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav() {
    function openMenu() {
        document.body.classList += ' menu-open'
    }
    function closeMenu() {
        document.body.classList.remove('menu-open')
    }
    return (
        <nav>
            <div className="nav_container">
                    <h1 className="title">ToDoList</h1>
                <button className="btn_menu" onClick={openMenu}>
                    <FontAwesomeIcon icon='bars'/>
                </button>
                <div className=" menu_backdrop">
                    <button className="btn_menu btn_menu-close" onClick={closeMenu}>
                        <FontAwesomeIcon icon='times'/>
                    </button>
                    <button className="add=task">Add Task</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav
