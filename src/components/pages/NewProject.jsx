import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import styles from './NewProject.module.css'

import ProjectForm from '../project/ProjectForm'

function NewProject() {
  const history = useNavigate()

  async function createPost( project ) {

    //initialize cost and services
    project.cost = 0
    project.services = []

    return await fetch('http://localhost:5000/projects',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(project)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      return  response.json();
    })
    .catch(error => {
      console.log('error: ', error);
    })
    .then((data) => {
      console.log(data)
      history.push('/project', {message: 'Projeto criado com sucesso'})
    })
}
 
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviço.</p>
      <ProjectForm handleSumit={createPost} btnText='Criar projeto'/>
    </div>
  )
}

export default NewProject