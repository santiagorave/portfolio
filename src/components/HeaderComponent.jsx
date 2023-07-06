
function HeaderComponent() {
    return (
        <>
            <nav className="mobile">
                <div className="navbar">
                    <div className="container nav-container">
                        <input className="checkbox" type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <div className="menu-items">
                            <li><a href="#about">01. About</a></li>
                            <li><a href="#skills">02. Skills</a></li>
                            <li><a href="#portfolio">03. Portfolio</a></li>
                            <li><a href="#experience">04. Career</a></li>
                            <li><a href="#contact">05. Contact</a></li>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="bar">
                <ul>
                <li><a href="#about">01. About</a></li>
                            <li><a href="#skills">02. Skills</a></li>
                            <li><a href="#portfolio">03. Portfolio</a></li>
                            <li><a href="#experience">04. Career</a></li>
                            <li><a href="#contact">05. Contact</a></li>
                </ul>
            </nav>
            <section className="banner-container">

            <section className="banner">
                        <ul>
                            <li><a target="blank" href="https://github.com/santiagorave/"><i className="fa-brands fa-github"></i></a></li>
                            <li><a target="blank" href="https://www.linkedin.com/in/santiago-ramirez-velasquez/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="mailto:santiagorave98@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
                            <li><a target="blank" href="https://www.instagram.com/santiagor_/"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><span>asd</span></li>
                        </ul>
                <article>
                    <aside className="banner-main">            
                        <aside>
                        <p>Hi, I'm Santiago</p>
                        <span>Software Developer</span>
                        </aside>
                        <figure>
                            <img src="/me.jpeg" alt="me" />
                        </figure>
                    </aside>
                    <p>With experience in different languages and technologies, Always looking for new challenges and opportunities</p>
                    <a href="#contact">Contact Me</a>
                </article>
            </section>
            </section>
        </>
    )
}

export default HeaderComponent