import styles from './Button.module.scss';

const Button = props => {
    return <button className={styles.button} onClick={props.value}>{props.children}</button>
};

export default Button;

//https://github.com/rmartyniuk/stoper/blob/master/src/App.js
// https://github.com/DagmaraJaneczek/project-pizzeria
// https://github.com/Arangus10?tab=repositories