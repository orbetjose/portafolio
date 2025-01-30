import { useState } from 'react'
import Navbar from './components/Navbar'
import Project from './components/Project'
import { projects } from './data/projects'

function App() {

  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  console.log(totalPages)

  const handleFilterChange = (tech: string) => {

    if (tech === "Todos") {
      setFilteredProjects(projects) 
    } else {
      const filtered = projects.filter((project) =>
        project.techStack.includes(tech)
      )
      setFilteredProjects(filtered) 
    }
    setCurrentPage(1)
  }


  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='container-xl mt-5'>

        <h2 className='text-center text-4xl'>Proyectos</h2>
        <div className="filter-buttons flex gap-2 justify-center my-8 font-Roboto">
          <button className='bg-gray-800 text-white w-[80px] rounded' onClick={() => handleFilterChange("Todos")}>Todos</button>
          <button className='bg-gray-800 text-white w-[100px] rounded' onClick={() => handleFilterChange("WordPress")}>WordPress</button>
          <button className='bg-gray-800 text-white w-[80px] rounded' onClick={() => handleFilterChange("React")}>React</button>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 md:gap-y-10 gap-4 md:gap-x-20 md:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:px-0'>

          {currentProjects.map((project) => (
            <Project 
              key={project.id}
              project={project}
            />
          ))}
        </div>
        <div className="pagination flex justify-center mt-10 mb-4">
          {(totalPages === 1) ? '' :
          Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-gray-800 text-white' : 'bg-gray-300'}`}
            >
              {index + 1}
            </button>
          ))
          }
        </div>
      </main>
    </>
  )
}

export default App
