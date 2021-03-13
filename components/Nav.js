import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h2>
          <Link href='/'>NCRASH</Link>
        </h2>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
