export class Category {
    
    public name: string;
    public subCategories: string[];

    constructor(name:string, subCategories: string[]){
        this.name = name;
        this.subCategories = subCategories;
    }
}
