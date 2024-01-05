import "./index.css"

const ProjectView =props=>{
    const {details}=props
    const {projectName,projectLink,description}=details
    return(
        <li className="project-item">
            <div className="project-details">
            <div className="project-details-container">
            <p className="project-name">{projectName}</p>
            <p className="description">{description}</p>
            <a href={projectLink} className="project-link">View Project</a>
          </div>
          </div>
          <img src="https://s3-alpha-sig.figma.com/img/43ae/d2cd/6d1eda697ebdd81b9493257f358f1f41?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YG0ZIZBdcuS8mlz-DPqKMkWcTb9JbXtzb0bKShSSkrwKyU1NAFRILy22TPMkTGqtGjEL1jElH-Rr9qfTaGNjsUmJuaZhPhNanP6yHBs~Bgb~9DY2cXLyV9KuulY~EcxoYsPA0YEKnZ9svWniVYJoPe6LY8eDtIaHGdfrWiQ1ub7UP3ul5ihQyoD~0OFTo2N74Y8x4Pt~zTeq5xqPDzjI9Km2AI~6vQMTNV4J8a6WQbCyyFTpU3lQUVDtlj8p08GJgelctETbysTMYrDl3NL01G6WPE017eX5vv5C266IlrYBMzncoAYILbujFfujlOz1tFzYIXpSkKh5Daf4njjPjw__" alt="project" className="project-image"/>
          
        </li>
    )
}

export default ProjectView