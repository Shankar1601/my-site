function App() {

  return (
    <>
      <nav>
        <h2>Portfolio</h2>
        <ul class="menu">
          <li>
            <h3>
              <a href="#About">About</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#Education">Education</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#Contact">Contact</a>
            </h3>
          </li>
        </ul>
        <button class="Download">
          <a
            href={`${import.meta.env.BASE_URL}Dev_shankar.pdf`}
            download="Shankar's resume"
            class="Download"
          >
            Download Resume
          </a>
        </button>
      </nav>

      <div class="container">
        <aside id="About">
          <h1>Hi, I'm Shankar</h1>
          <p>
            Enthusiastic Developer with knowledge of Python, Django, SQL and
            front-end technologies like HTML, CSS, Bootstrap and JavaScript.
            Skilled in building responsive web applications, working with
            databases. Eager to apply problem-solving skills and learn new
            technologies in a dynamic environment.
          </p>
          <button>Contact Me</button>
        </aside>

        <article>
          <img src={`${import.meta.env.BASE_URL}dp.jpg`} alt="Shankar's photo" />
        </article>
      </div>

      <div class="Education">
        <h1 id="Education">Education</h1>

        <div class="Education-details">
          <div>
            <h2>Post graduate</h2>
            <p>
              I graduated with a degree in Msc.Information Technology from
              UNIVERSITY OF MADRAS.
            </p>
            <p>From 2022 To 2024</p>
          </div>
          <i class="fa-solid fa-angles-down"></i>
          <div>
            <h2>Under graduate</h2>
            <p>
              I graduated with a degree in BCA from Shree chandraprabhu jain
              college.
            </p>
            <p>From 2018 To 2021</p>
          </div>
          <i class="fa-solid fa-angles-down"></i>
          <div>
            <h2>HSE</h2>
            <p>Vellayan Chettiyar Higher Secondary School</p>
            <p>From 2016 To 2018</p>
          </div>
          <i class="fa-solid fa-angles-down"></i>
          <div>
            <h2>SSLC</h2>
            <p>Vellayan Chettiyar Higher Secondary School</p>
            <p>From 2015 To 2016</p>
          </div>
        </div>

        <h1>Certifications</h1>

        <div class="certifications">
          <ul>
            <li>
              Full-Stack python - Code99 IT Academy (Aug 2024 To Mar 2025)
            </li>
            <li>
              Attended one day IOT work shop conducted by University Of Madras
              (Mar 2023)
            </li>
            <li>Diploma in MS-Office (24 Apr-2014 To 24 Jun 2014)</li>
          </ul>
        </div>

        <h1>Achivements</h1>

        <div class="Achivements">
          <ul>
            <li>Got lot of merits in my schooling days.</li>
            <li>
              Participated in NSS State level orientation program (September
              2018 )
            </li>
            <li>
              Inter-collegiate science communication review competition price
              winner 2019
            </li>
          </ul>
        </div>
      </div>

      <div class="skills">
        <h1>Skills</h1>
        <div class="skills-scroll-wrapper">
          <div class="skills-list">
            <ul class="scroll-track">
              <li>
                <i class="fa-brands fa-python"></i> Python
              </li>
              <li>
                <i class="fa-brands fa-html5"></i> HTML
              </li>
              <li>
                <i class="fa-brands fa-css3"></i> CSS
              </li>
              <li>
                <i class="fa-brands fa-js"></i> JavaScript
              </li>
              <li>
                <i class="fa-solid fa-database"></i> MySQL / PostgreSQL
              </li>
              <li>
                <i class="fa-brands fa-github"></i> Git & GitHub
              </li>
              <li>
                <i class="fa-brands fa-react"></i> React.JS
              </li>
              <li>
                <i class="fa-brands fa-bootstrap"></i> Bootstrap
              </li>

              <li>
                <i class="fa-brands fa-python"></i> Python
              </li>
              <li>
                <i class="fa-brands fa-html5"></i> HTML
              </li>
              <li>
                <i class="fa-brands fa-css3"></i> CSS
              </li>
              <li>
                <i class="fa-brands fa-js"></i> JavaScript
              </li>
              <li>
                <i class="fa-solid fa-database"></i> MySQL / PostgreSQL
              </li>
              <li>
                <i class="fa-brands fa-github"></i> Git & GitHub
              </li>
              <li>
                <i class="fa-brands fa-react"></i> React.JS
              </li>
              <li>
                <i class="fa-brands fa-bootstrap"></i> Bootstrap
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer id="Contact">
        <p>Contact Me</p>
        <h2>Shankar16101@gmail.com</h2>
        <h2>1234567890</h2>
        <div class="social-links">
          <ul>
            <li>
              <a
                href="https://github.com/Shankar1601/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rithish_01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>

          <button id="backToTopBtn" onClick={() => window.scrollToTop()}>
            <i class="fa-solid fa-arrow-up"></i>
          </button>

        </div>
      </footer>
    </>
  )
}

export default App;
