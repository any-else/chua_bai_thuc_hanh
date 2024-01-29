class Vehicle {
  name: string;
  engineCapacity: number;
  value: number;

  constructor(name: string, engineCapacity: number, value: number) {
    this.name = name;
    this.engineCapacity = engineCapacity;
    this.value = value;
  }

  calculateTax() {
    if (this.engineCapacity > 200) {
      return this.value * 0.05;
    } else if (this.engineCapacity > 100) {
      return this.value * 0.03;
    } else {
      return this.value * 0.01;
    }
  }

  displayInfo() {
    const tax = this.calculateTax();
    console.log(` Vehicle Info: 
        Name: ${this.name}
        Engine Capacity: ${this.engineCapacity}
        Value: ${this.value}
        Tax: ${tax} VND
    `);
  }

  main() {
    const listVehicle: Vehicle[] = [];
    let choice: string;
    while (true) {
      choice = prompt(`Hãy chọn menu: 
        1. Nhập thông tin và tạo ra các đối tượng xe 
        2. Xuất thông tin thuế
        3. Thoát
      `);

      switch (choice) {
        case "1":
          const name = prompt("Nhập tên xe");
          const engineCapacity = Number(prompt("Nhập dộng cấ"));
          const value = Number(prompt("Nhập giá"));
          const vehicle = new Vehicle(name, engineCapacity, value);
          listVehicle.push(vehicle);
          break;
        case "2":
          console.log(" Tax trạng thái");
          listVehicle.forEach((item, index) => {
            console.log(`Vehicle ${index + 1}: 
              ${item.displayInfo()}
            `);
          });
          break;
        case "3":
          console.log("Chương trình đã thoát");
          return;
        default:
          console.log("Vui lý chọn lai");
          break;
      }
    }
  }
}

const car = new Vehicle("Toyota Camry", 2000, 100000);

car.displayInfo();

car.main();
