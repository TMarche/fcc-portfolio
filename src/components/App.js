import devJane from "../assets/devjane.png"
import devJane01 from "../assets/dev-jane-01.jpg"

const App = () => {
    return (
        <>
            <header>
                <div class="logo">
                    <img src={devJane} alt="" />
                </div>
                <button class="nav-toggle" aria-label="toggle navigation">
                    <span class="hamburger"></span>
                </button>
                <nav class="nav">
                    {/* The double underscore says that this is a sub-component of the nav*/}
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">My Services</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">About Me</a></li>
                        <li class="nav__item"><a href="#" class="nav__link">My Work</a></li>
                    </ul>
                </nav>
            </header>

            {/* Introduction */}
            <section class="intro" id="home">
                {/* Double hyphen indicates that this is a modifier class -- it makes it a little 
                bit different from the default of what it otherwise would be */}
                <h1 class="section__title section__title--intro">
                    Hi, I am <strong>Jane Smith</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">front-end dev</p>
                <img src={devJane01} alt="a picture of Jane Smith smiling"/>
            </section>
        </>
    )
}

export default App;
