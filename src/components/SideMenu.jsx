import styles from './sideMenu.module.css';

function SideMenu() {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.menuLogoContainer}>
        <img className={styles.menuLogo} src="./imgs/logo.svg" alt="logo" />
      </div>
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
  );
}

export default SideMenu;
