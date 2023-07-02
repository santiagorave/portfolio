import IconComponent from "./IconComponent"
import { InlineWidget } from "react-calendly";

function MainComponent() {
    const SKILLS= [
        {
            name: 'React',
            src: '/src/assets/react.svg',
            type:'front'
        },
        {
            name: 'Angular',
            src: '/src/assets/angular.svg',
            type:'front',

        },
        {
            name: 'Javascript',
            src: '/src/assets/javascript.svg',
            type:'front'

        },
        {
            name: 'Vue.js',
            src: '/src/assets/Vue.svg',
            type:'front'

        },
        {
            name: 'JQuery',
            src: '/src/assets/JQuery.svg',
            type:'front'

        },
        {
            name: 'Bootstrap',
            src: '/src/assets/bootstrap.svg',
            type:'front'
        },
        {
            name: 'Node',
            src: '/src/assets/Node.svg',
            type:'server'

        },
        {
            name: 'PHP',
            src: '/src/assets/php.svg',
            type:'server'
        },
        {
            name: 'My SQL',
            src: '/src/assets/mysql.svg',
            type:'db'
    
        },
        {
            name: 'MongoDB',
            src: '/src/assets/MongoDB.svg',
            type:'db'
    
        },
        {
            name: 'Oracle',
            src: '/src/assets/sql.svg',
            type:'db'
        },
        {
            name: 'Git',
            src: '/src/assets/git.svg',
            type:'others'
    
        },
        {
            name: 'AEM',
            src: '/src/assets/aem.svg',
            type:'others'
    
        },
        {
            name: 'Azure DevOps',
            src: '/src/assets/azure.svg',
            type:'others'
        }
        

    ];
    const COURSES =[
        {
            img:'/src/assets/coursera.svg',
            name: 'Front-End Web Development with React'
        },
        {
            img:'/src/assets/udemy.jpg',
            name: 'The Complete JavaScript Course 2021: From Zero to Expert!'
        },
        {
            img:'/src/assets/udemy.jpg',
            name: 'React - The Complete Guide (incl Hooks, React Router, Redux)'
        },
        {
            img:'/src/assets/udemy.jpg',
            name: 'The Modern Angular Bootcamp'
        },

    ]
    return (
        <>
            <section className="container-content">
                <section className="content">

                    <section id="about" className="about">
                        <h2><span>02.</span> About Me</h2>
                    <p>Computer Engineer from the University of La Sabana (Colombia). Creative and passionate about learning new technologies and software development. With interest in frontend development. With the ability to adapt, solve problems and characterized by being persistent.</p>
                    </section>
                    <section id="skills" className="skills">
                        <h2><span>03.</span> Skills</h2>
                        <section>

                        <section className="gallery-section">
                            <h3>Client side</h3>
                            <article className="gallery">
                               {SKILLS.filter(skill=>skill.type=='front').map(skill=> <IconComponent key={skill.src} name={skill.name} src={skill.src}/>)}
                            </article>
                        </section>
                        <section className="gallery-section">
                            <h3>Server Side</h3>
                            <article className="gallery">
                               {SKILLS.filter(skill=>skill.type=='server').map(skill=> <IconComponent key={skill.src} name={skill.name} src={skill.src}/>)}

                            </article>
                        </section>

                        <section className="gallery-section">
                            <h3>Databases</h3>
                            <article className="gallery">
                               {SKILLS.filter(skill=>skill.type=='db').map(skill=> <IconComponent key={skill.src} name={skill.name} src={skill.src}/>)}

                            </article>
                        </section>
                        <section className="gallery-section">
                            <h3>Others</h3>
                            <article className="gallery">
                            {SKILLS.filter(skill=>skill.type=='others').map(skill=> <IconComponent key={skill.src} name={skill.name} src={skill.src}/>)}
             
                            </article>
                        </section>
                        </section>
                    </section>
                    <section id="experience" className="experience">
                        <h2><span>04.</span> Working Career</h2>
                        <article className="timeline">
                            <aside className="containerCW c-left">
                                <img src="/src/assets/Avianca_Logo.png" alt="Avianca" />
                                <aside className="titles">
                                    <h2>Avianca</h2>
                                    <small>2021-2023</small>
                                    <p>Development of user stories worked in an agile and scrum environment, focused on improving the user experience and frontend improvements on the Avianca.com website</p>
                                    <p><span  style={{color:'#00d1c7'}}>Technologies:</span> Javascript, Angular, Adobe Experience Manager (AEM), LESS,Java, React,Redux</p>
                                </aside>
                            </aside>
                            <aside className="containerCW c-right">
                            <img src="/src/assets/cala.png" alt="" />
                                <aside className="titles">
                                    <h2>Cala Analytics</h2>
                                    <small>2020-2021</small>
                                    <p>Analytical Consultant focused on data analysis and solution development</p>
                                    <p><span  style={{color:'#00d1c7'}}>Technologies:</span> Angular,React</p>
                                </aside>
                            </aside>
                            <aside className="containerCW c-left">
                            <img src="/src/assets/hc.jpg" alt="" />
                                <aside className="titles">
                                    <h2>Homecenter</h2>
                                    <small>2020-2020</small>
                                    <p>Information management (BI) intern in charge of extracting, storing and analyzing more than 30TB of information with the purpose of delivering key information such as KPIs for strategic marketing decisions.</p>
                                    <p><span style={{color:'#00d1c7'}}>Technologies:</span> SQL, Oracle Database, Power BI</p>
                                </aside>
                            </aside>
                        </article>
                    </section>
                    <section id="courses" className="courses">
                    <h2><span>04.</span> Activities and Courses</h2>
                    <section className="certifications">
                        <article className="certifications-slide">
                        {COURSES.map(course => {
                            return(
                                <figure key={course.name}>
                                    <img src={course.img} alt={course.name} />
                                    <figcaption>
                                        {course.name}
                                    </figcaption>
                                </figure>
                            )
                        })}
                        </article>
                        <article className="certifications-slide">
                        {COURSES.map(course => {
                            return(
                                <figure key={course.name}>
                                    <img src={course.img} alt={course.name} />
                                    <figcaption>
                                        {course.name}
                                    </figcaption>
                                </figure>
                            )
                        })}
                        </article>
                    </section>
                    </section>
                    <section id="portfolio" className="portfolio">
                    <h2><span>05. </span> Some projects</h2>
                    <section>

                        <article className="project">
                            <section className="front">

                           
                            <h3>Moviepedia</h3>
                            <p>All the movie/series information you need in one place</p>
                            <section className="tags">
                                <aside>React</aside>
                            </section>
                            </section>
                            <section className="back">
                            <aside className="icons">
                            <a target="blank" href="https://github.com/santiagorave/projectJS"><i className="fa-regular fa-folder"></i></a>
                           <a target="blank" href="https://github.com/santiagorave/projectJS"><i className="fa-brands fa-github"></i></a> 
                            </aside>
                                <img src="/src/assets/movipedia.png" alt="img" />
                            </section>
                        </article>
                        <article className="project">
                            <section className="front">

                   
                            <h3>Stays</h3>
                            <p>PHP project to look different places/accommodations to stay in Vancouver</p>
                            <section className="tags">
                                <aside>PHP</aside>
                            </section>
                            </section>
                            <section className="back">
                            <aside className="icons">
                            <a target="blank" href="https://github.com/natttara/FinalProjectForMay"><i className="fa-regular fa-folder"></i></a> 
                            <a target="blank" href="https://github.com/natttara/FinalProjectForMay"><i className="fa-brands fa-github"></i></a>
                            </aside>
                            <img src="/src/assets/airbnb.png" alt="" />
                       
                            </section>
                        </article>
                        <article className="project">
                            <section className="front">
                            <h3>Weather</h3>
                            <p>Wheater app in Vue.js. Check the weather of any city in the world</p>
                            <section className="tags">
                                <aside>Vue.js</aside>
                            </section>
                            </section>
                            <section className="back">
                            <aside className="icons">
                          <a target="blank" href="https://github.com/seonlim/Weather-Lim-Santiago-Joan"><i className="fa-regular fa-folder"></i></a>  
                            <a target="blank" href="https://github.com/seonlim/Weather-Lim-Santiago-Joan"><i className="fa-brands fa-github"></i></a>
                            </aside>
                            <img src="/src/assets/weather.png" alt="" />

                            </section>
                        </article>
                    </section>
                    </section>

                    <section className="contact" id="contact">
                    <h2><span>06.</span> Contact</h2>

                        <InlineWidget className="widget" url="https://calendly.com/santiagorave98"/>
                    </section>
                </section>
            </section>

        </>
    )
}

export default MainComponent