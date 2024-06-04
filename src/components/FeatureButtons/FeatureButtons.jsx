import styles from './FeatureButtons.module.css';

const FeatureButtons = () => {
    return(
        <div className={styles.container}>
            {/* FEATURES */}
            <div className={styles.featuresTop}>
                <div className={styles.featuresTopItems}>
                    <strong>Meal Registration</strong> 
                </div>
                <div className={styles.featuresTopItems}>
                    <strong>Rating System</strong>
                </div>
            </div>

            <div className={styles.featuresBottom}>
                <div className={styles.featuresBottomItems}>
                    <strong>Statistical Tracking</strong> 
                </div>
                <div className={styles.featuresBottomItems}>
                    <strong>Settings</strong>
                </div>
            </div>
        </div>
    )
}

export default FeatureButtons;