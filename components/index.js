let title = document.title;

var headerTopBlog = `<a href="index.html" class="about"> Blog </a>`;
var headerTopAboutMe = `<a href="aboutMe.html" class="about"> About Me</a>`;
var headerTopPosts = 
  `
  <button class="drop-down-link" data-dropdown-button> Posts </button>
  <div id="post-menu" class="post-drop-down" >
  <post-links></post-links>
  </div>
  `;

var mobileMenuBlog = `<a class= "mobile-about" href="index.html">Blog</a>`;
var mobileMenuAbout = `<a class= "mobile-about" href="aboutMe.html">About</a>`;

var headerTop = ``;
var postMenu = ``;
var mobileMenu = ``;

// if index.html, populate header and menu with About Me links
if (title === "The Old Guy in the Front of Class"){
  headerTop = headerTopAboutMe;
  postMenu = headerTopPosts;
  mobileMenu = mobileMenuAbout;
} else {
  // else, populate header and menu with links back to index.html
  headerTop = headerTopBlog;
  mobileMenu = mobileMenuBlog;
}

var constructorString = 
`
<div class="header">
  <div class="header-top">
    ${headerTop}
    <div class="post-history" data-dropdown>
      ${postMenu}
    </div>
    <div class="buttons">
      <social-media-buttons></social-media-buttons>
    </div>
  </div>
  
  <div class="header-bottom" >
    <a class="title">The Old Guy in the Front of Class</a>
    <div class="mobile-dropdown">
    <div id="xDropDown" class="container" onclick="showMenu(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div id="id-mobile-menu" class="mobile-menu">
            ${mobileMenu}
            <div class="mobile-buttons" >
              <social-media-buttons></social-media-buttons>  
            </div>
            <!-- <div>
              <post-links></post-links>
            </div> -->
        </div>
    </div>
    </div>
  </div> 
</div>
`

class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = constructorString;
  }

}

customElements.define('header-content',Header);

