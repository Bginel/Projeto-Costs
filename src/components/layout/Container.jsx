import styles from './Container.module.css'

function Container(props) {
  return (
    <span className={`${styles.container} ${styles[props.custonClass]}`}>{props.children}</span>
  )
}

export default Container