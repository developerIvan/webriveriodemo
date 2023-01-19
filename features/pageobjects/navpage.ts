import { ChainablePromiseElement } from 'webdriverio';
var config = require('../../wdio.conf').config;
const currAutomationProtocol =  config.automationProtocol ;
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
        if(currAutomationProtocol === "devtools"){
            return browser.setWindowSize(1920,1080);

          }else{ 
            return browser.maximizeWindow();
          }
    }

    /**
     * This fucntion only works with devtools protocol, see more https://webdriver.io/docs/api/browser/throttle/
     */
    public async simulateSlowConn(){ 
        console.log("current auto protocol "+currAutomationProtocol)
        if(currAutomationProtocol === "devtools"){
            await browser.throttle('online')
            await browser.throttle({
                offline: false,
                downloadThroughput: 200 * 1024 / 8,
                uploadThroughput: 200 * 1024 / 8,
                latency: 20
            })
        }
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
        await  $("h1[itemprop='headline']").waitForExist({ timeout: 20000 });
        const elem = await $("h1[itemprop='headline']");
        await  elem.scrollIntoView({ block: 'center', inline: 'center' });
        return   elem;
       // 
    }

}