import { BsFillCheckCircleFill } from 'react-icons/bs';
import styles from './task.module.css';
import { TbTrash } from 'react-icons/tb';
import PropTypes from 'prop-types';

export function Task({task, onComplete, onDelete}){
    return(
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>

            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    );
}

Task.propTypes = {
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    }).isRequired,
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };