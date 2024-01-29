var Student = /** @class */ (function () {
    function Student(studentId, fullName, mathScore, englishScore, computerScore) {
        this.studentId = studentId;
        this.fullName = fullName;
        this.mathScore = mathScore;
        this.englishScore = englishScore;
        this.computerScore = computerScore;
    }
    Student.prototype.inputStudentInfo = function () {
        this.studentId = prompt("Nhập mã sinh viên");
        this.fullName = prompt("Nhập họ tên");
        this.mathScore = Number(prompt("Nhập điểm toán"));
        this.englishScore = Number(prompt("Nhập điểm tiếng anh"));
        this.computerScore = Number(prompt("Nhập điểm tin học"));
    };
    Student.prototype.calculateAverageScore = function () {
        return (this.mathScore + this.englishScore + this.computerScore) / 3;
    };
    Student.prototype.calculateCumulativeScore = function () {
        var avg = this.calculateAverageScore();
        if (avg > 9) {
            return "Điểm tích luỹ là 4";
        }
        else if (avg > 7) {
            return "Điểm tích luỹ là 3";
        }
        else if (avg > 5) {
            return "Điểm tích luỹ là 2";
        }
        else if (avg > 4) {
            return "Điểm tích luỹ là 1";
        }
        else {
            return " Không có điểm tích luỹ";
        }
    };
    Student.prototype.printStudentInfo = function () {
        console.log(" Student Info:  \n\n      Student Code: ".concat(this.studentId, "\n      Full Name: ").concat(this.fullName, "\n      Math Score: ").concat(this.mathScore, "\n      English Score: ").concat(this.englishScore, "\n      Computer Score: ").concat(this.computerScore, "\n      "));
    };
    return Student;
}());
var student = new Student("001", "Nguyen Van A", 9, 8, 7);
student.printStudentInfo();
console.log("Điểm trung bình của học sinh là ", student.calculateAverageScore());
console.log("Điểm tích luỹ là :", student.calculateCumulativeScore());
