import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav() {
    //const [tasks, setTasks] = useState([])

    function openMenu() {
        document.body.classList += ' menu-open'
    }
    function closeMenu() {
        document.body.classList.remove('menu-open')
    }
    function openNewTask() {
        console.log('open new task')
    }
    /*
    function addTask() {

    }
     */
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
                    <button className="add-task" onClick={openNewTask}>Add Task</button>
                    <div className="new-task">
                        <input className="task-input" type="text" placeholder="New Task"/>
                        <button className="btn-add-task">
                            <FontAwesomeIcon icon='circle-arrow-right'/>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
