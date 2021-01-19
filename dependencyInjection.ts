type IFormatPriceDependency = {
    getFormatDependency(number: number): string;
}

type IPriceFormat = {
    getPriceWithSymbol(): string;
}

class Dependency implements IFormatPriceDependency {
    getFormatDependency(number: number){
        return `R$ ${number}`
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

const main = () => {
    const price = 10;
    const dependencyClass = new Dependency();
    const priceClass = new Price(price, dependencyClass);
    
    console.log(priceClass.getPriceWithSymbol())
}

main()
