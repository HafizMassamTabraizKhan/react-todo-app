import styles from './header.module.css';
import { BsPlusCircle } from 'react-icons/bs';
import todoLogo from '../../assets/Logo.svg';
import { useState } from 'react';
import PropTypes from 'prop-types';

export function Header({onAddTask}){
const [title, setTitle] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event){
        setTitle(event.target.value);
    }

    return(
        <header className={styles.header}>
            <img src={todoLogo} alt='App-Logo' />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input type="text" placeholder='Add a new task' value={title} onChange={onChangeTitle}/>
                <button>Create<BsPlusCircle size={20} /></button>
            </form>
        </header>
    );
}

Header.propTypes = {
    onAddTask: PropTypes.func.isRequired,
  };
  