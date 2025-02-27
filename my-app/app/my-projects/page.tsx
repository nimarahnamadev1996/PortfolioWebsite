import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";


const page = () => {
  return (
    <div
   className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
   style={{ backgroundImage: "url(/bg-3.jpg)" }}>
     
     <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%] max-md:grid-cols-1 max-md:mt-40">
        {
            Projects.map((project,index) => (
                <ProjectCard
                key={index}
                title={project.title}
                text={project.text}
                image={project.src}/>
            ))
        }
     </div>
   </div>
  );
};

export default page;