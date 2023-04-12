//-------------------Super Class---------------
class Account {
    constructor(Acc_no = 0, Balance = 0) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    debitAmount() {
        //No implementation
    }
    creditAmount() {
        //No implementation
    }
    getBalanc() {
        //No implementation
    }
}
class Saving_Account extends Account {
    constructor(Acc_no = 0, Balance = 0, Min_Balance = 0) {
        super(Acc_no, Balance);
        this.Min_Balance = Min_Balance;
        this.Min_Balance = Min_Balance;
    }
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
class Current_Account extends Account {
    constructor(Acc_no = 0, Balance = 0, insert_rate = 0) {
        super(Acc_no, Balance);
        this.insert_rate = insert_rate;
        this.insert_rate = insert_rate;
    }
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
