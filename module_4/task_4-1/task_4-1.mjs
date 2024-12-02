"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

const currencyTypes = {
        NOK: {value: 1.0000, name: "Norske kroner", denomination: "kr"},
        EUR: {value: 0.0985, name: "Europeiske euro", denomination: "€"},
        USD: {value: 0.1091, name: "United States dollar", denomination: "$"},
        GBP: {value: 0.0847, name: "Pound sterling", denomination: "£"},
        INR: {value: 7.8309, name: "Indiske rupee", denomination: "₹"},
        AUD: {value: 0.1581, name: "Australske dollar", denomination: "A$"},
        PHP: {value: 6.5189, name: "Fillippinske peso", denomination: "₱"},
        SEK: {value: 1.0580, name: "Svenske kroner", denomination: "kr"},
        CAD: {value: 0.1435, name: "Kanadiske dollar", denomination: "C$"},
        THB: {value: 3.3289, name: "Thai baht", denomination: "฿"}
}

const AccountTypes = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensionskonto"
};

class TAccount{
    #balance;
    #withdrawCount;
    #type;
    #currencyType;

    constructor(aType){
        this.#type = aType;
        this.#balance = 0;
        this.#withdrawCount = 0;
        this.#currencyType = currencyTypes.NOK;

    }
    toString(){
        return this.#type;
    }
    setType(aType){
        let text = "Account type has been changed from " + this.#type;
        this.#type = aType;
        this.#withdrawCount = 0;
        text += " to " + this.#type;
        printOut(text);

    }

    getBalance(){
        return this.#balance;
    }
    deposit(aAamount){
        this.#balance += aAamount;
        this.#balance, this.#balance += aAamount;
        let text = "Deposit of " + aAamount + this.#currencyType.denomination;
        text += ", new balance is " ;
        text += this.#balance + this.#currencyType.denomination;
        printOut(text);
    }
    withdraw(aAamount){
        let canWithDraw = true;
        let text = "";
        
        switch(this.#type){
            case AccountTypes.Savings:
            if(this.#withdrawCount < 3){
                this.#withdrawCount++;
                canWithDraw = true;
            }else{
                canWithDraw = false;
                text = "cannot withdraw more than 3 times from a" + this.#type + " account."
                    break;
            }
            case AccountTypes.Pension:
                canWithDraw = false;
                text = " cannot withdraw more than 3 times from a " + this.#type + " account."
                    break;
        
        if(this.#withdrawCount < 3){
            this.#withdrawCount++;
            this.#balance -= aAamount + " , new balance is " + this.#balance;
        }else{
            printOut(text);
        }
        break;
        case AccountTypes.Pension:
            canWithDraw = false;
        break
}
    }

setCurrencyType(aNewCurrencyType) {
    if(this.#currencyType === aNewCurrencyType) {
        return;
    }
    this.#balance = this.#balance * this.#currencyConvert(aNewCurrencyType);
    let text = " The account currency has changed from ";
    text += this.#currencyType.name + " to " + aNewCurrencyType.name;
    text += newLine + " New balance is ";
    text += this.#balance.toFixed(2) + aNewCurrencyType.denomination;
    this.#currencyType = aNewCurrencyType;
    printOut(text);

}

#currencyConvert(aType){
    return currencyTypes.NOK.value / this.#currencyType.value * aType.value;
}
} // end off class TAccount



printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(AccountTypes.Normal1 + ", " + AccountTypes.Saving + ", " + AccountTypes.Credit + " , " + AccountTypes.Pension);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let myAccount = new

TAccount(AccountTypes.Normal);
printOut("My account " + myAccount.toString());
myAccount.setType(AccountTypes.Saving);
printOut("myAccount: " + myAccount.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(100);
myAccount.withdraw(23);

printOut("My account balance is: " + myAccount.getBalance());

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);

myAccount.setType(AccountTypes.Pension);
myAccount.withdraw(10);

myAccount.setType(AccountTypes.Saving);
myAccount.withdraw(10);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(150);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.setCurrencyType(currencyTypes.SEK);
myAccount.setCurrencyType(currencyTypes.USD);
myAccount.setCurrencyType(currencyTypes.NOK);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(12, currencyTypes.USD);
myAccount.withdraw(10, currencyTypes.GBP);
myAccount.setCurrencyType(currencyTypes.CAD);
myAccount.setCurrencyType(currencyTypes.INR);
myAccount.setCurrencyType(100.927, currencyTypes.SEK);


printOut(newLine);






