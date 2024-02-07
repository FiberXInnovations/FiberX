
class CommonMethods {
    constructor() { 
        
    }

    scrollToTop = () => {
        const mainSection = document.getElementById('ScrollArea');
        if(mainSection) { mainSection.scrollTo(0, 0); }
    }
}

export default CommonMethods