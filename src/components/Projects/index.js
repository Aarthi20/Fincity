import Header from "../../components/Header"
import ProjectContext from "../../context/ProjectContext"
import ProjectView from "../../components/ProjectView"
import "./index.css"

const Projects=()=>{
    return(
       <ProjectContext.Consumer>
        {value=>{
            const {projectsList}=value
            console.log(projectsList)

            return(
                <div>
                    <Header/>
                    <div className="projects-container">
                        <h1 className="project-title">Projects</h1>
                        <hr className="hr-line"/>
                        <div className="project-items">
                            <div className="project-details">
                            <div className="project-details-container">
                            <p className="project-name">Jobby App</p>
                            <p className="description">Designed pages for Login, Home, Jobs, and Job item details with React components and form inputs.
                            Secured user data with JWT tokens, REST API calls, and local storage</p>
                            <a href="https://aarthijobs.ccbp.tech" className="project-link">View Project</a>
                        </div>
                        </div>
                        <div className="image-container">
                        <img src="https://play-lh.googleusercontent.com/upf8416oJbcTFZcTjz9o1IkjWcaC2F7guH545fz8eKMpUO0C4QUqD0WLngO04WKvrVY" alt="project" className="project-image"/>
                        </div>
                        </div>

                        <div className="project-items">
                        <div className="image-container">
                        <img src="https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-home-lg-output.png" alt="project" className="project-image"/>
                        </div>
                        <div className="project-details">
                        <div className="project-details-container">
                            <p className="project-name">IPL Dashboard</p>
                            <p className="description">Implemented IPL Dashboard app where users can list of ipl team, individual team.
                            Implemented UI such as home dashboard, individual team info routes by using React Router library components like Route, Switch, Link, props,lists & keys.</p>
                            <a href="https://aarthiiplboard.ccbp.tech" className="project-link">View Project</a>
                        </div>
                        </div>
                        </div>

                        <div className="project-items">
                            <div className="project-details">
                                <div className="project-details-container">
                            <p className="project-name">Wikipedia Search Application</p>
                            <p className="description">Experience a new level of information access with a custom wikipedia search application that simplifies the search process. With a user-friendly interface and 
                            relevant results, users can expand their knowledge in no time.</p>
                            <a href="aarthiwikipedia.ccbp.tech" className="project-link">View Project</a>
                        </div>
                        </div>
                        <div className="image-container">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png" alt="project" className="project-image"/>
                        </div>
                        
                        
                        </div>
                        
                            <ul className="projects-list-container">
                            {projectsList.map(each=>(
                                <ProjectView key={each.id} details={each}/>
                            ))}
                        </ul>
                        <img src="https://res.cloudinary.com/dtoiozo4f/image/upload/v1704435138/Screenshot_47_ng901e.png" className="footer-img" alt="footer"/>
      
                    </div>

                </div>
            )
        }}
       </ProjectContext.Consumer>
    )
}

export default Projects