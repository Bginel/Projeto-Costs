import{useState} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import { useEffect } from 'react'

function ProjectForm({ btnText }) {

  const [categories, setCategories] = useState([])

  console.log(categories)
  
  useEffect(() =>{
    fetch("http://localhost:5000/categories"), {
      method: 'GET',
      headers: {
        'Content-Type': 'aplication/json'
    }
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
      .cath((err => console.log(err)))
  }
  },[])

  return (
    <form className={styles.form}>
      <Input 
        type="text" 
        text="Nome do projeto" 
        name="name" 
        placeholder="Insira o nome do projeto" />
      <Input 
        type="number" 
        text="Orçamento do projeto" 
        name="budget" 
        placeholder="Insira o orçamento total" />
      <Select 
        name='category_id' 
        text="Selecione a categoria" 
        options={categories} />
      < SubmitButton text={btnText} />
    </form>
  )
}

export default ProjectForm