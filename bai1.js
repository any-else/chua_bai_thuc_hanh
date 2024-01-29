var Account = /** @class */ (function () {
    function Account(stk, name, balance) {
        this.interestRate = 0.035;
        this.stk = stk;
        this.name = name;
        this.balance = 0;
    }
    // Phương thức
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            return "Bạn nạp tiền thành công số dư của bạn là: " + this.balance;
        }
        else {
            return "Số tiền của bạn nhập sai rồi";
        }
    };
    // with draw
    Account.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance = this.balance - amount;
            return "Rút tiền thành công. Số tiền khi mà b đã rút là:" + this.balance;
        }
        else {
            return "Bạn ngheò";
        }
    };
    //mature
    Account.prototype.mature = function () {
        var interestRateMature = this.balance * this.interestRate;
        return this.balance + interestRateMature;
    };
    return Account;
}());
var acc1 = new Account("309329", "Chinh NV", 1000);
acc1.deposit(2000);
console.log(acc1);
