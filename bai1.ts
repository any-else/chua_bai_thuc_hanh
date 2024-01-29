class Account {
  private stk: string;
  private name: string;
  private balance: number;
  public interestRate: number = 0.035;

  constructor(stk: string, name: string) {
    this.stk = stk;
    this.name = name;
    this.balance = 0;
  }

  // Phương thức
  deposit(amount: number): string {
    if (amount > 0) {
      this.balance += amount;
      return "Bạn nạp tiền thành công số dư của bạn là: " + this.balance;
    } else {
      return "Số tiền của bạn nhập sai rồi";
    }
  }

  // with draw
  withdraw(amount: number): string {
    if (amount > 0 && amount <= this.balance) {
      this.balance = this.balance - amount;
      return "Rút tiền thành công. Số tiền khi mà b đã rút là:" + this.balance;
    } else {
      return "Bạn ngheò";
    }
  }

  //mature

  mature() {
    const interestRateMature = this.balance * this.interestRate;
    return this.balance + interestRateMature;
  }
}

const acc1 = new Account("309329", "Chinh NV");

acc1.deposit(2000);

console.log(acc1);
