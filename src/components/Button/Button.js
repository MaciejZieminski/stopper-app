import styles from './Button.modules.scss';

const Button = (props) => {
    return(
       <button className={styles.button}>{props.children}</button> 
    )
}