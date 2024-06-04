import { useState, useEffect } from 'react';
import styles from './DashboardBox.module.css';

export default function DashboardBox() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateDots = () => {
    const dots = document.getElementsByClassName(styles.navDot);
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.toggle(styles.active, i === currentSlide);
    }
  };

  useEffect(() => {
    updateDots();
  }, [currentSlide, updateDots]);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    setEndX(event.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (startX - endX > 50) {
      setCurrentSlide(Math.min(currentSlide + 1, 2));
    } else if (endX - startX > 50) {
      setCurrentSlide(Math.max(currentSlide - 1, 0));
    }
  };

  const setFixedValues = (meal, carbsValue, fatValue, proteinValue) => {
    const carbsLimit = 500;
    const fatLimit = 150;
    const proteinLimit = 200;

    document.getElementById(`${meal}-carbs-value`).innerText = `${carbsValue}g`;
    document.getElementById(`${meal}-carbs-circle`).style.setProperty('--percent', `${(carbsValue / carbsLimit) * 100}%`);
    document.getElementById(`${meal}-carbs-limit`).innerText = `${carbsValue} / ${carbsLimit}g`;

    document.getElementById(`${meal}-fat-value`).innerText = `${fatValue}g`;
    document.getElementById(`${meal}-fat-circle`).style.setProperty('--percent', `${(fatValue / fatLimit) * 100}%`);
    document.getElementById(`${meal}-fat-limit`).innerText = `${fatValue} / ${fatLimit}g`;

    document.getElementById(`${meal}-protein-value`).innerText = `${proteinValue}g`;
    document.getElementById(`${meal}-protein-circle`).style.setProperty('--percent', `${(proteinValue / proteinLimit) * 100}%`);
    document.getElementById(`${meal}-protein-limit`).innerText = `${proteinValue} / ${proteinLimit}g`;
  };

  useEffect(() => {
    setFixedValues('breakfast', 45, 20, 30);
    setFixedValues('lunch', 55, 30, 40);
    setFixedValues('dinner', 65, 40, 50);
  }, []);

  return (
    <div className={styles.container} id="container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className={styles.slides} id="slides" style={{ transform: `translateX(${-currentSlide * 100 / 3}%)` }}>
        <div className={styles.slide} id="breakfast">
          <h2>Breakfast</h2>
          <p>Avocado Toast with Poached Egg</p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={`${styles.statCircle} ${styles.carbs}`} id="breakfast-carbs-circle">
                <div className={styles.statValue} id="breakfast-carbs-value"></div>
              </div>
              <div className={styles.statLabel}>Carbohydrates</div>
              <div className={styles.statLimit} id="breakfast-carbs-limit"></div>
            </div>
            <div className={styles.stat}>
              <div className={`${styles.statCircle} ${styles.fat}`} id="breakfast-fat-circle">
                <div className={styles.statValue} id="breakfast-fat-value"></div>
              </div>
              <div className={styles.statLabel}>Fat</div>
              <div className={styles.statLimit} id="breakfast-fat-limit"></div>
            </div>
            <div className={styles.stat}>
              <div className={`${styles.statCircle} ${styles.protein}`} id="breakfast-protein-circle">
                <div className={styles.statValue} id="breakfast-protein-value"></div>
              </div>
              <div className={styles.statLabel}>Protein</div>
              <div className={styles.statLimit} id="breakfast-protein-limit"></div>
            </div>
          </div>
        </div>
        <div className={styles.slide} id="lunch">
          <h2>Lunch</h2>
          <p>Grilled Chicken Caesar Salad</p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={`${styles.statCircle} ${styles.carbs}`} id="lunch-carbs-circle">
                <div className={styles.statValue} id="lunch-carbs-value"></div>
              </div>
              <div className={styles.statLabel}>Carbohydrates</div>
              <div className={styles.statLimit} id="lunch-carbs-limit"></div>
            </div>
            <div className={styles.stat}>
              <div className={`${styles.statCircle} ${styles.fat}`} id="lunch-fat-circle">
                <div className={styles.statValue} id="lunch-fat-value"></div>
              </div>
              <div className={styles.statLabel}>Fat</div>
              <div className={styles.statLimit} id="lunch-fat-limit"></div>
            </div>
            <div className={styles.stat}>
              <div className={`${styles.statCircle} ${styles.protein}`} id="lunch-protein-circle">
                <div className={styles.statValue} id="lunch-protein-value"></div>
              </div>
              <div className={styles.statLabel}>Protein</div>
              <div className={styles.statLimit} id="lunch-protein-limit"></div>
            </div>
          </div>
        </div>
        <div className={styles.slide} id="dinner">
          <h2>Dinner</h2>
          <p>Grilled Salmon with Sweet Potatoes</p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={`${styles.statCircle} ${styles.carbs}`} id="dinner-carbs-circle">
                <div className={styles.statValue} id="dinner-carbs-value"></div>
              </div>
              <div className={styles.statLabel}>Carbohydrates</div>
              <div className={styles.statLimit} id="dinner-carbs-limit"></div>
            </div>
            <div className={styles.stat}>
              <div className={`${styles.statCircle} ${styles.fat}`} id="dinner-fat-circle">
                <div className={styles.statValue} id="dinner-fat-value"></div>
              </div>
              <div className={styles.statLabel}>Fat</div>
              <div className={styles.statLimit} id="dinner-fat-limit"></div>
            </div>
            <div className={styles.stat}>
              <div className={`${styles.statCircle} ${styles.protein}`} id="dinner-protein-circle">
                <div className={styles.statValue} id="dinner-protein-value"></div>
              </div>
              <div className={styles.statLabel}>Protein</div>
              <div className={styles.statLimit} id="dinner-protein-limit"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navDots}>
        <div className={styles.navDot} onClick={() => showSlide(0)}></div>
        <div className={styles.navDot} onClick={() => showSlide(1)}></div>
        <div className={styles.navDot} onClick={() => showSlide(2)}></div>
      </div>
    </div>
  );
}

