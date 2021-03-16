export class AboutModel{
    public imagePath :string; 
    public cardTitle :string;
    public cardText : string;
    public footerMap : string;
    public mycity:string;
    constructor(imagePath : string,cardTitle : string ,cardText:string,footerMap : string,mycity:string){
        this.imagePath=imagePath;
        this.cardTitle=cardTitle;
        this.cardText=cardText;
        this.footerMap=footerMap;
        this.mycity=mycity;
    }
}