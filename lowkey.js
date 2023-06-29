class TagElement extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({ mode: "open" })
        this.button = document.querySelector('.cute')
    }

    connectedCallback () {
        this.shadowRoot.innerHTML =`
        Supercalifragilisticexpialidocious! 
        \n NEW YOOOOORRRRRRRK!!!`
        
    }
}

customElements.define('superb-b', TagElement)
