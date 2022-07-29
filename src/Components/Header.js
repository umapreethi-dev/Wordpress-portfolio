import logo  from '../images/up-logo.png';



function Header() {
 
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid header">
        <a class="navbar-brand" href="#">
        <img src={logo}  alt="logo" height="50px" width="50px" />
        </a>
        {/* <span class="navbar-brand">Umapreethi Santhanakrishnan</span> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
         <span class="navbar-toggler-icon"></span>
        </button>
        <div  class="navbar-collapse collapse  " id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#tech">Skills</a>
              
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#testimonials">Testimonials</a>
            </li>
          </ul>
         
          
          </div>
      </div>
    </nav>
  );
}

export default Header;

