class Student {
  private studentId: string;
  private fullName: string;
  private mathScore: number;
  private englishScore: number;
  private computerScore: number;

  constructor(
    studentId: string,
    fullName: string,
    mathScore: number,
    englishScore: number,
    computerScore: number
  ) {
    this.studentId = studentId;
    this.fullName = fullName;
    this.mathScore = mathScore;
    this.englishScore = englishScore;
    this.computerScore = computerScore;
  }

  inputStudentInfo(): void {
    this.studentId = prompt("Nhập mã sinh viên");
    this.fullName = prompt("Nhập họ tên");
    this.mathScore = Number(prompt("Nhập điểm toán"));
    this.englishScore = Number(prompt("Nhập điểm tiếng anh"));
    this.computerScore = Number(prompt("Nhập điểm tin học"));
  }

  calculateAverageScore(): number {
    return (this.mathScore + this.englishScore + this.computerScore) / 3;
  }

  calculateCumulativeScore(): string {
    const avg = this.calculateAverageScore();
    if (avg > 9) {
      return "Điểm tích luỹ là 4";
    } else if (avg > 7) {
      return "Điểm tích luỹ là 3";
    } else if (avg > 5) {
      return "Điểm tích luỹ là 2";
    } else if (avg > 4) {
      return "Điểm tích luỹ là 1";
    } else {
      return " Không có điểm tích luỹ";
    }
  }

  printStudentInfo(): void {
    console.log(
      ` Student Info:  

      Student Code: ${this.studentId}
      Full Name: ${this.fullName}
      Math Score: ${this.mathScore}
      English Score: ${this.englishScore}
      Computer Score: ${this.computerScore}
      `
    );
  }
}

const student = new Student("001", "Nguyen Van A", 9, 8, 7);

student.printStudentInfo();

console.log(
  "Điểm trung bình của học sinh là ",
  student.calculateAverageScore()
);

console.log("Điểm tích luỹ là :", student.calculateCumulativeScore());
