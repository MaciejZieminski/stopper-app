import styles from './Stopper.module.scss';
import Button from './components/Button/Button.js';

const Stopper = () => {
    return(
      <div className={styles.container}>
        <Button>start</Button>
        <Button>stop</Button>
        <Button>reset</Button>
      </div>
    );
}

export default Stopper; 