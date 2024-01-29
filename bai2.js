var Vehicle = /** @class */ (function () {
    function Vehicle(name, engineCapacity, value) {
        this.name = name;
        this.engineCapacity = engineCapacity;
        this.value = value;
    }
    Vehicle.prototype.calculateTax = function () {
        if (this.engineCapacity > 200) {
            return this.value * 0.05;
        }
        else if (this.engineCapacity > 100) {
            return this.value * 0.03;
        }
        else {
            return this.value * 0.01;
        }
    };
    Vehicle.prototype.displayInfo = function () {
        var tax = this.calculateTax();
        console.log(" Vehicle Info: \n        Name: ".concat(this.name, "\n        Engine Capacity: ").concat(this.engineCapacity, "\n        Value: ").concat(this.value, "\n        Tax: ").concat(tax, " VND\n    "));
    };
    Vehicle.prototype.main = function () {
        var listVehicle = [];
        var choice;
        while (true) {
            choice = prompt("H\u00E3y ch\u1ECDn menu: \n        1. Nh\u1EADp th\u00F4ng tin v\u00E0 t\u1EA1o ra c\u00E1c \u0111\u1ED1i t\u01B0\u1EE3ng xe \n        2. Xu\u1EA5t th\u00F4ng tin thu\u1EBF\n        3. Tho\u00E1t\n      ");
            switch (choice) {
                case "1":
                    var name_1 = prompt("Nhập tên xe");
                    var engineCapacity = Number(prompt("Nhập dộng cấ"));
                    var value = Number(prompt("Nhập giá"));
                    var vehicle = new Vehicle(name_1, engineCapacity, value);
                    listVehicle.push(vehicle);
                    break;
                case "2":
                    console.log(" Tax trạng thái");
                    listVehicle.forEach(function (item, index) {
                        console.log("Vehicle ".concat(index + 1, ": \n              ").concat(item.displayInfo(), "\n            "));
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
    };
    return Vehicle;
}());
var car = new Vehicle("Toyota Camry", 2000, 100000);
car.displayInfo();
car.main();
