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
                            <li><a href="#">01. About</a></li>
                            <li><a href="#">02. Skills</a></li>
                            <li><a href="#">03. Portfolio</a></li>
                            <li><a href="#">04. Career</a></li>
                            <li><a href="#">05. Contact</a></li>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="bar">
                <ul>
                    <li><a href="#">01. ABOUT</a></li>
                    <li><a href="#">02. Skills</a></li>
                    <li><a href="#">03. Portfolio</a></li>
                    <li><a href="#">04. Career</a></li>
                    <li><a href="#">05. Contact</a></li>
                </ul>
            </nav>
            <section className="banner-container">

            <section className="banner">
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fa-solid fa-envelope"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><span>asd</span></li>
                        </ul>
                <article>
                    <aside className="banner-main">
                       
                        <aside>
                        <p>Hi, I'm Santiago</p>
                        <h1>Software Developer</h1>
                        </aside>
                        <figure>
                            <img src="/src/assets/img/me.jpeg" alt="me" />
                        </figure>
                    </aside>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt repellat architecto. Maiores, ducimus! Voluptatibus.</p>
                    <button>Contact Me</button>
                </article>
            </section>
            </section>
        </>
    )
}

export default HeaderComponent