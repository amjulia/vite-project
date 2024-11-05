import { useMenu } from "../MenuContext";
import styles from "./Menu.module.css";
const Menu = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.logo} src="logo.png" alt="Теле2" />
        <div className={styles.geo}>
          <img src="Search.svg" alt="Местонахождение" />
          <p className={styles.text}>Москва и область</p>
        </div>
        <div className={styles.bellMobile}>
            {!isMenuOpen && (
                <div className={styles.bell}>
                <span className={styles.bellCount}></span>
                <img
                  className={styles.bellMiddle}
                  src="notification-bell.svg"
                  alt="колокольчик"
                />
              </div>
            )}
          
          <img
            onClick={toggleMenu}
            className={styles.mobile}
            src={isMenuOpen ? "Close.svg" : "Hamburger-icon.svg"}
            alt={isMenuOpen ? "Закрыть" : "Меню"}
          />
          
        </div>
      </div>
      <div className={styles.menuDesctop} >
      <nav className={styles.menuItems}>
            <ul className={styles.menuList}>
              <li>Преимущества Tele2</li>
              <li>Тарифы</li>
              <li>Акции и спецпредложения</li>
              <li>Промотариф Tele2</li>
              <li>Технология eSIM</li>
              <li>Подключение нового абонента</li>
            </ul>
          </nav>
      </div>
      
      {isMenuOpen && (
        <div className={styles.menuMobile}>
          <nav className={styles.menuItems}>
            <ul className={styles.menuList}>
              <li>Преимущества Tele2</li>
              <li>Тарифы</li>
              <li>Акции и спецпредложения</li>
              <li>Промотариф Tele2</li>
              <li>Технология eSIM</li>
              <li>Подключение нового абонента</li>
            </ul>
          </nav>
          <div className={styles.geoMobile}>
            <img src="Search.svg" alt="Местонахождение" />
            <p className={styles.text}>Москва и область</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;

