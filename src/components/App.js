import devJane from "../assets/devjane.png"
import devJane01 from "../assets/dev-jane-01.jpg"
import devJane02 from "../assets/dev-jane-02.jpg"
import portfolio01 from "../assets/portfolio-01.jpg"

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
                        <li class="nav__item"><a href="#services" class="nav__link">My Services</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About Me</a></li>
                        <li class="nav__item"><a href="#work" class="nav__link">My Work</a></li>
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

            {/* My Services */}
            <section class="myservices" id="services">
                <h2 class="section__title section__title--services">What I do</h2>
                <div class="services">
                    <div class="service">
                        <h3>Design + Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit pharetra erat in semper. Nulla facilisi. Praesent pharetra velit tempor felis tincidunt maximus. Sed eu gravida elit. Suspendisse efficitur tristique nunc, sit amet varius quam consequat in. Nullam varius neque sit amet porta fermentum. Vivamus quis odio at lorem tempor porta. In metus tellus, molestie euismod elit id, semper semper quam. Mauris velit libero, venenatis eu sem in, sagittis volutpat felis. Nullam et velit gravida, mollis sem et, blandit augue. Integer pulvinar vitae libero quis ultricies. Nullam scelerisque turpis eu fermentum efficitur. Sed condimentum eu velit sed feugiat. Curabitur non fermentum justo. Nulla eget egestas felis. Mauris ut mattis enim.</p>
                    </div> {/* / service */}
                    
                    <div class="service">
                        <h3>E-Commerce</h3>
                        <p>Donec sodales varius diam vitae porta. Duis vel viverra tortor, eget luctus dolor. Maecenas vitae dictum lacus. Nunc ullamcorper eros nec tellus imperdiet, lobortis scelerisque tortor vestibulum. Nunc eu urna arcu. Sed sit amet ex odio. Curabitur et velit in magna convallis imperdiet. Fusce a magna lectus.</p>
                    </div> {/* / service */}
                    
                    <div class="service">
                        <h3>WordPress</h3>
                        <p>In aliquam lacus at pharetra efficitur. Vivamus consequat ullamcorper sapien, eget lacinia tortor aliquet vitae. Aliquam eleifend est nisi, at sagittis urna ultrices eget. Proin libero nunc, congue non pellentesque nec, pretium eu velit. Integer in felis velit. Morbi eget mi id quam consectetur venenatis. Morbi vitae urna mi. Pellentesque in felis sodales, mattis odio eget, commodo velit. Integer turpis ipsum, viverra nec rutrum non, finibus sed felis. Sed elit nulla, tempor nec lacus et, ornare ultrices lacus. In ultricies lorem tellus, lacinia placerat arcu dapibus eu. Duis malesuada libero nibh, eget varius nunc varius eu. Duis id nunc feugiat, suscipit odio vitae, rutrum odio.</p>
                    </div> {/* / service */}
                </div> {/* / services */}

                <a href="#work" class="btn">My Work</a>
            </section>

            {/* About Me */}
            <section class="about-me" id="about">
                <h2 class="section__title section_title--about">Who I am</h2>
                {/* Using p since it's actually better to use p as a subtitle -- using an 'hn' tag is frowned upon here */}
                <p class = "section__subtitle section__subtitle--about"></p>

                <div class="about-me__body">
                    <p></p>
                    <p></p>  
                </div>

                <img src={devJane02} alt="Jane leaning against a bus" />
            </section>

            <section class="my-work" id="work">
                <h2 class="section__title">My Work</h2>
                <p class="section__subtitle"></p>

                {/* Portfolio item 0 */}
                <div class="portfolio">
                    <a href="#" class="portfolio__item">
                        <img src={portfolio01} alt="" class="portfolio__img"/>
                    </a>
                </div>
            </section>
        </>
    )
}

export default App;
