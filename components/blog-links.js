let blogLinks = [];

// Post Object Location
const blogObject = {Now_for_Some_Automation:"24 Oct 2022",How_did_I_get_here: "18 Oct 2022",
It_cant_be_that_hard: "18 Oct 2022"};

for(title in blogObject) {
  let menuLink = title.replaceAll("_", " ");
  let link = `<a href="#${title}">${blogObject[title]} - ${menuLink} </a>`;
  blogLinks.push(link);
}

var constructorString =``

blogLinks.forEach(element => {
  constructorString += element;
});



class BlogDiv extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = constructorString;
  }
}
customElements.define('post-links',BlogDiv);
