import styles from "../src/App.module.css";

function App() {
  return (
    <div>
      <h2 className={styles.h2_container}></h2>
      <h3 className={styles["h3-container"]}></h3>
    </div>
  );
}

export default App;
