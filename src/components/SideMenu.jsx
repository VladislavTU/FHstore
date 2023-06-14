import styles from './sideMenu.module.css';

function SideMenu() {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.menuLogoContainer}>
        <img className={styles.menuLogo} src="./imgs/logo.svg" alt="logo" />
      </div>
      <div className={styles.sideMenuMiddle}>
        {' '}
        <div className={styles.phoneMenuContainer}>
          <img src="./imgs/phone.svg" alt="phone" />
          <p className={styles.phoneMenu}>+7 495 902 61 04</p>
        </div>
        <div className={styles.sideMenuListContainer}>
          <p>Проекты домов</p>
          <p>Услуги</p>
          <p>О компании</p>
          <p>Наши работы</p>
          <p>Отзывы</p>
          <p>Акции</p>
          <p>Контакты</p>
        </div>
      </div>
      <div className={styles.sideMenuBottom}>
        <div className={styles.menuFind}>
          <input type="text" placeholder="Поиск" />
          <img src="./imgs/find.svg" alt="find" />
        </div>
        <div className={styles.sideMenuCallButton}>
          <p>Заказать звонок</p>
        </div>
        <div>
          <img src="./imgs/instagram.svg" alt="instagram" />
          <img src="./imgs/vk.svg" alt="vk" />
          <img src="./imgs/facebook.svg" alt="facebook" />
        </div>
        <div>
          <p>Пользовательское соглашение</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
