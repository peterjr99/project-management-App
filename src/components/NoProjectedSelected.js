
import Button from './Button'

function NoProjectedSelected({onStartAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
     <h2 className='text-xl font-bold text-stone-500 my-4'>No project Selected</h2>
     <p className='text-stone-400 mb-4'> Select a project or get started with a new one</p>
     <p className='mt-8'>
        <Button onClick={onStartAddProject}> Create new project</Button>
     </p>

    </div>
  )
}

export default NoProjectedSelected