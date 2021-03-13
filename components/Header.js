import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <>
      <h1 className={styles.title}>
        <span>Next</span>Crash
      </h1>
      <p className={styles.description}>
        Learning the NextJS with <strong>React Crash Course</strong>
      </p>
    </>
  )
}

export default Header
