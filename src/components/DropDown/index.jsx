import React, {useState} from 'react'
import styles from './Dropdown.module.sass'
import 'react-dropdown/style.css';
export default function Dropdown() {
  const [active, setactive] = useState(true)
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <p onClick={()=> setactive(!active)}>Option</p>
        <div className={active ? styles.drop : styles.hide}>
          <p>One</p>
          <p>Two</p>
          <p>Three</p>
        </div>
      </div>
    </div>
  )
}
