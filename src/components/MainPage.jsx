import styles from './mainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPageTop}>
        <div className={styles.mainPageTopSlogan}>
          <img src="" alt="" />
          <h1>Строим деревянные дома для жизни</h1>
          <p>Уже построили 847 домов и бань по всей России</p>
        </div>
        <div className={styles.mainPageTopImg}>
        </div>
        <div className={styles.mainPageTopInfo}></div>
      </div>
    </div>
  );
};

export default MainPage;
