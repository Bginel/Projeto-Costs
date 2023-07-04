import styles from './Input.module.css'

function Input({type, text, name, placeholder, hamdleOnChange, value}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        id={name} 
        onChange={hamdleOnChange} 
        value={value}/>
    </div>
  )
}

export default Input