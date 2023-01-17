import { ChainablePromiseElement } from 'webdriverio';

export class navpage {

    constructor(){

    }
      sectionSelector=""; 

    public setSectionSelector (section:string) {
         this.sectionSelector="span[data-hover='"+section+"']";
    }

    public async goToMainPage(){
        return browser.url(`https://automatenow.io/`);
    }

    public async maximizePage(){
       /// return browser.setWindowSize(2560,1440);
       return browser.maximizeWindow();
    }

    public async simulateSlowConn(){
        await browser.throttle('online')
        await browser.throttle({
            offline: false,
            downloadThroughput: 200 * 1024 / 8,
            uploadThroughput: 200 * 1024 / 8,
            latency: 20
        })
    }

    public async defineSectionNavSeleector(section:string){
        switch(section.toLowerCase()){
            case "training":
                this.setSectionSelector("Training");
                break;
            case "home":
                this.setSectionSelector("Home");
                break;
                case "sandbox":
                this.setSectionSelector("Sandbox");
                break;    
            default:
                this.setSectionSelector("Home");
                break;

        }
    }    
    public async goToSpecificSection(section:string){
        const sectionButton =  await  $(this.sectionSelector);
        // sectionButton.scrollIntoView();  
         sectionButton.waitForClickable({ timeout: 6000 });
         sectionButton.click();  
    }

    public async getSectionTitle(){
        await  $(".title h1").waitForExist({ timeout: 16000 });
      //  await  $(".title h1").scrollIntoView();
        return   $(".title h1");
       // 
    }

}