


class SocialMediaButtons extends HTMLElement {
  constructor() {
    super();
  }

connectedCallback() {
  this.innerHTML = `
  <style>
  .fa {
    padding: 10px;
    font-size: 0.9375em;
    width: 15px;
    text-align: center;
    margin-left: 10px;
    text-decoration: none;
    border-radius: 50%;
  }
    /* git-hub */
    .fa-github {
        background: #3B5998;
        color: #3B5998;
      }
    
      /* linkedin */
      .fa-linkedin {
        background: #3B5998;
        color: #3B5998;
      }
      /* feed */
      .fa-feed {
        background: #3B5998;
        color: #3B5998;
      }
      .fa:hover {
        opacity: 0.7;
      }
  </style>
  
  <a href="https://github.com/Jordan-Gallivan" class="fa fa-github" target="_blank"></a>
  <a href="https://www.linkedin.com/in/jordan-gallivan/" class="fa fa-linkedin" target="_blank"></a>
  <a href="components/feed.xml" class="fa fa-feed" target="_blank"></a>

  `;
}
}

customElements.define('social-media-buttons', SocialMediaButtons);
