import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import styles from './NewProject.module.css'

import ProjectForm from '../project/ProjectForm'

function NewProject() {

  const navegate = useNavigate()
  const baseURL = 'http://localhost:5000/projects'

  function createPost( project ) {

    project.cost = 0,
    project.services = []

      axios
      .post(baseURL, project)
      .then((data) => {
      //console.log(data)
      //console.log(project)
      navegate('/projects',
        {state:
          {message:'Projeto criado com sucesso'},
        }
      )
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