import{useState, useEffect} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


function ProjectForm({ handleSumit, btnText, projectData}) {

  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  async function getCategories() {
    return await fetch('http://localhost:5000/categories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.log('error: ', error);
    });
}
   
  useEffect(() => { 
    getCategories().then(data => {
    setCategories(data)
  });
 }, []);

 const sumbit = (e) => {
  e.preventDefault();
  handleSumit(project)
 }

 function handleChange(e) {
  setProject({...project, [e.target.name]: e.target.value})
 }
 function handleCategory(e) {
  setProject({...project, category:{
    id: e.target.value,
    name: e.target.options[e.target.seleactorIndex].text,
  }})
 }

  return (
    <form onSubmit={sumbit} className={styles.form}>
      <Input 
        type="text" 
        text="Nome do projeto" 
        name="name" 
        placeholder="Insira o nome do projeto" 
        handleOnChange={handleChange}
        defaultValue={project.name ? project.name : ''}
        />
      <Input 
        type="number" 
        text="Orçamento do projeto" 
        name="budget" 
        placeholder="Insira o orçamento total" 
        handleOnChange={handleChange}
        defaultValue={project.budget ? project.budget : ''}
        />
      <Select 
        name='category_id' 
        text="Selecione a categoria" 
        options={categories} 
        handleOnChange={handleCategory}
        defaultValue={project.category ? project.category.id : ''}
        />
      < SubmitButton text={btnText}/>
    </form>
  )
}

export default ProjectForm