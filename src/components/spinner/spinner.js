import styles from './spinner.module.scss'
import { ReactComponent as SpinnerSVG } from "../../assets/svg/spinner.svg"

const Spinner = () => {
    return (
        <div className={styles.container}>
            <SpinnerSVG className={`${styles.spinner} ${styles.animationSpin}`} />
        </div>
    )
}

export default Spinner