class Bank {
    _bankName;
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }
    get bankName() {
        return this._bankName;
    }
    set bankName(value) {

        this._bankName = value;
    }
    newCustomer(customer) {
        //console.log(bank.newCustomer({
        // firstName: ’Svetlin’, 
        // lastName: ’Nakov’, 
        // personalId: 6233267}));

        if (this.allCustomers.find(c => c.firstName === customer.firstName)) {
            throw new Error(`${customer["firstName"]} ${customer["lastName"]} is already our customer!`);
        }

        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        //(6233267, 250)
        if (!this.allCustomers.find(c => c.personalId === personalId)) {
            throw new Error(`We have no customer with this ID!`);
        }

        let person = this.allCustomers.find(p => p.personalId === personalId);
        if (person["totalMoney"] === undefined) {

            person["totalMoney"] = amount;
        } else{
            person["totalMoney"] += amount;
        }

        person["count"] = 1;
        person["transactiopns"] = [];
        person["transactiopns"].push(`${person.count}. ${person.firstName} ${person.lastName} made depostit of ${amount}$!`);
        person["count"] ++

        return `${person.totalMoney}$`;

    }
    withdrawMoney(personalId, amount) {
        if (!this.allCustomers.find(c => c.personalId === personalId)) {
            throw new Error(`We have no customer with this ID!`);
        }
        let person = this.allCustomers.find(p => p.personalId === personalId);
        if (person.totalMoney < amount) {
            throw new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`);
        }
        
            person["totalMoney"] -= Number(amount);

            person["transactiopns"].push(`${person.count}. ${person.firstName} ${person.lastName} withdrew ${amount}$!`);
        
        return `${person.totalMoney}$`;
    }

    customerInfo(personalId) {
        if (!this.allCustomers.find(c => c.personalId === personalId)) {
            throw new Error(`We have no customer with this ID!`);
        }
        let person = this.allCustomers.find(p => p.personalId === personalId);
        let result = '';

        result += `Bank name: ${this._bankName}\nCustomer name: ${person.firstName} ${person.lastName}\nCustomer ID: ${person.personalId}\nTotal Money: ${person.totalMoney}\nTransactions:`;
     
            
        
        // Bank name: SoftUni Bank
        // Customer name: Svetlin Nakov
        // Customer ID: 6233267
        // Total Money: 375$
        // Transactions:
        // 3. Svetlin Nakov withdrew 125$!
        // 2. Svetlin Nakov made depostit of 250$!
        // 1. Svetlin Nakov made depostit of 250$!
   return result.trim();
    }

}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
