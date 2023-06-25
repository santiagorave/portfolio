import IconComponent from "./IconComponent"

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

                    <section className="about">
                        <h2><span>02.</span> About Me</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aperiam doloribus non similique numquam neque porro illo molestiae magnam, quos maiores perspiciatis eligendi ducimus iusto hic eaque cumque, rerum accusamus.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus suscipit dolores libero omnis asperiores. Sequi nemo blanditiis laborum eum! Ea, quia dignissimos iste atque et soluta quas voluptate nemo optio.</p>
                    </section>
                    <section className="skills">
                        <h2><span>03.</span> Skills</h2>
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
                    <section className="experience">
                        <h2><span>04.</span> Working Career</h2>
                        <article className="timeline">
                            <aside className="containerCW c-left">
                                <img src="/src/assets/Avianca_Logo.png" alt="Avianca" />
                                <aside className="titles">
                                    <h2>Avianca</h2>
                                    <small>2021-2023</small>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum deleniti assumenda molestias quas! Suscipit itaque ex repellendus tempora explicabo facere.</p>
                                </aside>
                            </aside>
                            <aside className="containerCW c-right">
                            <img src="/src/assets/cala.png" alt="" />
                                <aside className="titles">
                                    <h2>Cala Analytics</h2>
                                    <small>2020-2021</small>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum deleniti assumenda molestias quas! Suscipit itaque ex repellendus tempora explicabo facere.</p>
                                </aside>
                            </aside>
                            <aside className="containerCW c-left">
                            <img src="/src/assets/hc.jpg" alt="" />
                                <aside className="titles">
                                    <h2>Homecenter</h2>
                                    <small>2020-2020</small>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum deleniti assumenda molestias quas! Suscipit itaque ex repellendus tempora explicabo facere.</p>
                                </aside>
                            </aside>
                        </article>
                    </section>
                    <section className="courses">
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

                    <section className="contact">

                    </section>
                </section>
            </section>

        </>
    )
}

export default MainComponent