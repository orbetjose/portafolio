import { Projects } from "../types"


type ProjectProps = {
    project: Projects
}

export default function Project({project} : ProjectProps) {

    const { name, image, description, techStack, url, color} = project

    return(
         <div className="flex flex-col items-center mt-4">
            <figure className="w-full h-48 rounded-xl shadow-xl flex items-center justify-center" style={{backgroundColor: `${color}`}}>
                <img className="h-[40px] object-contain" src={`./assets/projects/${image}.png`} alt={name} />
            </figure>
            <div className="mt-3 w-full px-2 font-Roboto">
                <p className="capitalize text-center py-2 ">{name}</p>
                <p className="text-sm text-center">{description}</p>
                <p className="text-justify mt-2 hidden">Utilizamos las siguientes tecnologías: {techStack.join(", ")}</p>
            </div>
            <a href={url} target="_blank" className="bg-gray-800 text-white px-4 py-1 mt-3 rounded font-Roboto">Ir al proyecto</a>
         </div>
    )
}