import styles from "../src/App.module.css";

function App() {
  return (
    <div>
      <header className={styles.info}>
        <div className={styles.nav}>
          <img width={74.42} height={30.55} src="" alt="Logo picture" />
          <span className={styles.href}>
            <a href="#">Vakansiyalar</a>
            <a href="#">Kandidatlar</a>
            <a href="#">Kompaniyalar</a>
            <a href="#">Xizmatlar</a>
            <a href="#">Ta'lim</a>
          </span>

          <select name="" id={styles.Til}>
            <option value="O'zbek">
              <p className={styles.til}>O'zb</p>
            </option>
            <option value="English">
              <p className={styles.til}>Eng</p>
            </option>
            <option value="Russian">
              <p className={styles.til}>Rus</p>
            </option>
          </select>
          <button>Boshlash</button>
        </div>
      </header>

      <section className={`${styles.doc} ${container2}`}>
        <div className={styles['doc-info']}>
          <span className={styles['for-title']}>
            <h2 className={styles.title}>Kompaniya ma'lumotlari</h2>
            <h6 className={styles['sub-title']}>
              Kompaniya haqidagi ma'lumotlarni kiriting
            </h6>
          </span>
          <div className={styles['space-to']}>
            <span className={styles['avatar-for']}>
              <img width={84} height={84} src="" alt="" />
              <a href="Yuklash">Yuklash</a>
            </span>

            <span className={styles.inputs}>
              <p className={styles.teg}>Kompaniya nomi *</p>
              <input type="text" id={styles.name} placeholder="Kompaniya nomi" />
            </span>

            <span className={styles.inputs}>
              <p class={styles.teg}>Email *</p>
              <input type="text" id={styles.name} placeholder="Email" />
            </span>

            <span className={styles.inputs}>
              <p className={styles.teg}>Telefon raqami *</p>
              <input type="number" id={styles.name} placeholder="UZ +998" />
            </span>

            <div className={styles.social}>
              <p>Linklar *</p>
              <span>
                <button>
                  <a href="#">
                    <img
                      width={24}
                      height={24}
                      src="./images/chrome.svg"
                      alt="chrome picture"
                    />
                  </a>
                </button>
                <button>
                  <a href="#">
                    <img
                      width={24}
                      height={24}
                      src="./images/instagram.svg"
                      alt="instagram picture"
                    />
                  </a>
                </button>
                <button>
                  <a href="#">
                    <img
                      width={24}
                      height={24}
                      src="./images/telegram.svg"
                      alt="telegram picture"
                    />
                  </a>
                </button>
                <button>
                  <a href="#">
                    <img
                      width={24}
                      height={24}
                      src="./images/facebook.svg"
                      alt="facebook picture"
                    />
                  </a>
                </button>
                <button>
                  <a href="#">
                    <img
                      width={24}
                      height={24}
                      src="./images/kitten.svg"
                      alt="kitten picture"
                    />
                  </a>
                </button>
              </span>
            </div>

            <span className={styles.from}>
              <span className={styles.country}>
                <p>Davlat *</p>
                <select name="" id={styles.Davlat}>
                  <option value="O'zbekiston">O'zbekiston</option>
                  <option value="Rossiya">Rossiya</option>
                  <option value="USA">USA</option>
                </select>
              </span>

              <span className={styles.country}>
                <p>Shahar *</p>
                <select name="" id={styles.Shahar}>
                  <option value="Toshkent">Toshkent</option>
                  <option value="Qo'qon">Qo'qon</option>
                  <option value="Nukus">Nukus</option>
                </select>
              </span>
            </span>

            <span className={styles.inputs0}>
              <p className={styles.teg}>Yashash joyi *</p>
              <input type="text" id={styles.name} placeholder="Joy" />
            </span>
            <span className={styles.inputs}>
              <p className={styles.teg}>Hodimlar soni *</p>
              <input type="number" id={styles.name} placeholder="Hodimlar soni" />
            </span>

            <span className={styles.text}>
              <p>Izoh *</p>
              <textarea name="text" id={styles.text}>
                Kompaniya haqida izoh qoldiring
              </textarea>
            </span>
          </div>
        </div>

        <div className={styles.button}>
          <button className={styles.first}>ORTGA</button>
          <button className={styles.second}>KEYINGISI</button>
        </div>
      </section>
    </div>
  );
}

export default App;
