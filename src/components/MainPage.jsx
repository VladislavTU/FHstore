import styles from './mainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPageTop}>
        <div className={styles.mainPageTopSlogan}>
          <img src="./imgs/icons/home.png" alt="" />
          <h1>Строим деревянные дома для жизни</h1>
          <p>Уже построили 847 домов и бань по всей России</p>
        </div>
        <div className={styles.mainPageTopImg}></div>
        <div className={styles.mainPageTopInfo}>
          <div className={styles.mainPageTopInfoItem}>
            <img src="./imgs/icons/14_years.png" alt="" />
            <p>14 лет на рынке</p>
          </div>
          <div className={styles.mainPageTopInfoItem}>
            <img src="./imgs/icons/mecanical.png" alt="" />
            <p>Полный цикл производства</p>
          </div>
          <div className={styles.mainPageTopInfoItem}>
            <img src="./imgs/icons/guarantee.png" alt="" />
            <p>Гарантия на все наши дома</p>
          </div>
        </div>
      </div>
      <div className={styles.housesTypes}>
        <div className={styles.housesTypesItem}>
          <img src="" alt="" />
          <h3>Дома из бруса</h3>
          <p>от 450 000 ₽</p>
          <p>Посмотреть проекты</p>
        </div>
        <div className={styles.housesTypesItem}>
          <img src="" alt="" />
          <h3>Дома из бруса</h3>
          <p>от 450 000 ₽</p>
          <p>Посмотреть проекты</p>
        </div>
        <div className={styles.housesTypesItem}>
          <img src="" alt="" />
          <h3>Дома из бруса</h3>
          <p>от 450 000 ₽</p>
          <p>Посмотреть проекты</p>
        </div>
        <div className={styles.housesTypesItem}>
          <img src="" alt="" />
          <h3>Дома из бруса</h3>
          <p>от 450 000 ₽</p>
          <p>Посмотреть проекты</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
