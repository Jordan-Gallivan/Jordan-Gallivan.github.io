const blogs =[`How_did_I_get_here?`,`It_cant_be_that_hard`];
let blogLinks = [];

const blogObject = {How_did_I_get_here: "18 Oct 2022",
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