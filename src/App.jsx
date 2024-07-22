import { useState } from "react";
import React from "react";
import styles from "./App.module.css";

function App() {
  const [form, setFrom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("O'zbekiston");
  const [city, setCity] = useState("Toshkent");
  const [address, setAddress] = useState("");
  const [count, setCount] = useState(null);
  const [desc, setDesc] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePhone(event) {
    setPhone(event.target.value);
  }

  function handleCountry(event) {
    setCountry(event.target.value);
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleAddress(event) {
    setAddress(event.target.value);
  }

  function handleCount(event) {
    setCount(event.target.value);
  }

  function handleDesc(event) {
    setDesc(event.target.value);
  }

  function Setlocal() {
    let users = [];
    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
    }
    return users;
  }

  function handleForm(event) {
    event.preventDefault();
    let user = {
      name:name,
      email:email,
      phone:phone,
      country:country,
      city:city,
      address:address,
      count:count,
      description:desc
    }

    let users = Setlocal()
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users)) 
  }

  return (
    <div>
      <header className={styles.info}>
        <div className={styles.nav}>
          <img
            width={74.42}
            height={30.55}
            src="src/assets/images/Logo_icon.svg"
            alt="Logo picture"
          />
          <span className={styles.href}>
            <a href="#">Vakansiyalar</a>
            <a href="#">Kandidatlar</a>
            <a href="#">Kompaniyalar</a>
            <a href="#">Xizmatlar</a>
            <a href="#">Ta'lim</a>
          </span>

          <select name="" id={styles.Til}>
            <option value="O'zbek">O'zb</option>
            <option value="English">Eng</option>
            <option value="Russian">Rus</option>
          </select>
          <button>Boshlash</button>
        </div>
      </header>

      <section className={styles.container2}>
        <form className={styles["doc"]}>
          <div className={styles["doc-info"]}>
            <div className={styles["for-title"]}>
              <h2 className={styles.title}>Kompaniya ma'lumotlari</h2>
              <h6 className={styles["sub-title"]}>
                Kompaniya haqidagi ma'lumotlarni kiriting
              </h6>
            </div>
            <div className={styles["space-to"]}>
              <div className={styles["avatar-for"]}>
                <img
                  width={84}
                  height={84}
                  src="src/assets/images/ellips.svg"
                  alt="Yuklash"
                />
                <a href="Yuklash">Yuklash</a>
              </div>

              <div className={styles.inputs}>
                <p className={styles.teg}>
                  Kompaniya nomi <h>*</h>
                </p>
                <input
                  type="text"
                  id={styles.name}
                  placeholder="Kompaniya nomi"
                  onChange={handleName}
                />
              </div>

              <div className={styles.inputs}>
                <p className={styles.teg}>
                  Email <h>*</h>
                </p>
                <input
                  type="text"
                  id={styles.email}
                  placeholder="Email"
                  onChange={handleEmail}
                />
              </div>

              <div className={styles.inputs}>
                <p className={styles.teg}>
                  Telefon raqami <h>*</h>
                </p>
                <input
                  type="number"
                  id={styles.phone}
                  placeholder="UZ +998"
                  onChange={handlePhone}
                />
              </div>

              <div className={styles.social}>
                <p>
                  Linklar <h>*</h>
                </p>
                <span>
                  <button>
                    <a href="#">
                      <img
                        width={24}
                        height={24}
                        src="src/assets/images/icon_earth.svg"
                        alt="chrome picture"
                      />
                    </a>
                  </button>
                  <button>
                    <a href="#">
                      <img
                        width={24}
                        height={24}
                        src="src/assets/images/icon_instagram.svg"
                        alt="instagram picture"
                      />
                    </a>
                  </button>
                  <button>
                    <a href="#">
                      <img
                        width={24}
                        height={24}
                        src="src/assets/images/icon_telegram.svg"
                        alt="telegram picture"
                      />
                    </a>
                  </button>
                  <button>
                    <a href="#">
                      <img
                        width={24}
                        height={24}
                        src="src/assets/images/icon_facebook.svg"
                        alt="facebook picture"
                      />
                    </a>
                  </button>
                  <button>
                    <a href="#">
                      <img
                        width={24}
                        height={24}
                        src="src/assets/images/icon_github.svg"
                        alt="github picture"
                      />
                    </a>
                  </button>
                </span>
              </div>

              <div className={styles.from}>
                <div className={styles.country}>
                  <p>
                    Davlat <h>*</h>
                  </p>
                  <select name="" id={styles.Davlat} onChange={handleCountry}>
                    <option value="O'zbekiston">O'zbekiston</option>
                    <option value="Rossiya">Rossiya</option>
                    <option value="USA">USA</option>
                  </select>
                </div>

                <div className={styles.country}>
                  <p>
                    Shahar <h>*</h>
                  </p>
                  <select name="" id={styles.Shahar} onChange={handleCity}>
                    <option value="Toshkent">Toshkent</option>
                    <option value="Qo'qon">Qo'qon</option>
                    <option value="Nukus">Nukus</option>
                  </select>
                </div>
              </div>

              <div className={styles.inputs0}>
                <p className={styles.teg}>
                  Yashash joyi <h>*</h>
                </p>
                <input
                  type="text"
                  id={styles.address}
                  placeholder="Joy"
                  onChange={handleAddress}
                />
              </div>
              <div className={styles.inputs}>
                <p className={styles.teg}>
                  Hodimlar soni <h>*</h>
                </p>
                <input
                  type="number"
                  id={styles.staff}
                  placeholder="Hodimlar soni"
                  onChange={handleCount}
                />
              </div>

              <div className={styles.text}>
                <p>
                  Izoh <h>*</h>
                </p>
                <textarea name="text" id={styles.comment} placeholder="Kompaniya haqida izoh qoldiring"g onChange={handleDesc}>
                  
                </textarea>
              </div>
            </div>
          </div>

          <div className={styles.button}>
            <button className={styles.first}>ORTGA</button>
            <button className={styles.second} onClick={handleForm}>KEYINGISI</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
