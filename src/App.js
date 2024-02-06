import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectedSelected from "./components/NoProjectedSelected";
import SelectedProjected from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId:undefined,
    projects:[],
    tasks:[],
  })

  function handleAddTask(text){
    setProjectsState((prevState) => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        projectId:prevState.selectedProjectId,
        id: taskId,
      }
      return{
        ...prevState,
        tasks:[newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        tasks:prevState.tasks.filter((task) => task.id !== id ),
      };
    })
  }

  function handleSelectProject(id){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: id,
      };
    })
  }

const handleStartAppProject = () => {
  setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProjectId: null,
    };
  })
}

function handleCancelAddProject() {
  setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProjectId: undefined,
    };
  })
}

function handleAddProject(projectData) {
  setProjectsState(prevState => {
    const newProject = {
      ...projectData,
      id: Math.random()
    }
    return{
      ...prevState,
      projects:[...prevState.projects, newProject]
    }
  })
}

function handleDeleteProject(){
  setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProjectId: undefined,
      projects:prevState.projects.filter((project) => project.id !== prevState.selectedProjectId ),
    };
  })
}

const SelectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

let content = <SelectedProjected 
project={SelectedProject}
 onDelete={handleDeleteProject}
  onAddTask={handleAddTask}
 onDeleteTask={handleDeleteTask}
  tasks={projectsState.tasks}
 />;

if (projectsState.selectedProjectId === null){
  content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
}else if(projectsState.selectedProjectId === undefined){
  content = <NoProjectedSelected onStartAddProject={handleStartAppProject}/>;
}

  
  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectSidebar onStartAddProject={handleStartAppProject} 
     projects={projectsState.projects} 
     onSelectProject={handleSelectProject} /> 
      {content}
    
      
    </main>
  );
}

export default App;
