// Types
type IFormatPriceDependency = {
    getFormatDependency(number: number): string;
}

type IPriceFormat = {
    getPriceWithSymbol(): string;
}
// End Types

// Classes
class Dependency implements IFormatPriceDependency {
    getFormatDependency(number: number){
        return "teste"
    }
}

class Price implements IPriceFormat{
    price: number;
    dependency: IFormatPriceDependency

    constructor(price: number, dependency: IFormatPriceDependency){
        this.price = price;
        this.dependency = dependency
    }

    getPriceWithSymbol(){
        const dependencyImplementation = this.dependency.getFormatDependency(this.price)
        return dependencyImplementation;
    }
}
// End Classes

// Main function implementation
const main = () => {
    const price = 12;
    const dependencyClass = new Dependency();
    const priceClass = new Price(price, dependencyClass);
    
    console.log(priceClass.getPriceWithSymbol())
}

main()
