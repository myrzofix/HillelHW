function Student(name, surname, birthYear, courses = []) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.courses = courses;
    this.grades = {};
    this.attendance = {};
  
    this.addGrade = function(course, grade) {
      if (!this.grades[course]) {
        this.grades[course] = [];
      }
      this.grades[course].push(grade);
    };
  
    this.addAttendance = function(course, attended) {
      if (!this.attendance[course]) {
        this.attendance[course] = 0;
      }
      this.attendance[course] += attended;
    };
  
    this.getAverageGrade = function(course) {
      const grades = this.grades[course];
      if (!grades) return null;
      return grades.reduce((a, b) => a + b) / grades.length;
    };
  
    this.getAverageAttendance = function(course) {
      return this.attendance[course] || 0;
    };
  
    this.changeCourse = function(oldCourse, newCourse) {
      const index = this.courses.indexOf(oldCourse);
      if (index !== -1) {
        this.courses[index] = newCourse;
      }
    };
  
    this.addCourse = function(course) {
      if (!this.courses.includes(course)) {
        this.courses.push(course);
      }
    };
  
    this.removeCourse = function(course) {
      const index = this.courses.indexOf(course);
      if (index !== -1) {
        this.courses.splice(index, 1);
      }
    };
  
    this.getInfo = function() {
      return {
        name: this.name,
        surname: this.surname,
        birthYear: this.birthYear,
        courses: this.courses,
        grades: this.grades,
        attendance: this.attendance
      };
    };
  }
  
  const student1 = new Student('John', 'Doe', 1998);
  student1.addCourse('Math');
  student1.addGrade('Math', 85);
  student1.addAttendance('Math', 10);
  
  student1.addCourse('Science');
  student1.removeCourse('Math');
  console.log(student1.getInfo());
  
  function Group() {
    this.students = [];
  
    this.addStudent = function(student) {
      this.students.push(student);
    };
  
    this.removeStudent = function(student) {
      const index = this.students.indexOf(student);
      if (index !== -1) {
        this.students.splice(index, 1);
      }
    };
  
    this.getAttendanceRanking = function() {
      return this.students.sort((a, b) => {
        const avgA = a.getAverageAttendance();
        const avgB = b.getAverageAttendance();
        return avgB - avgA;
      });
    };
  
    this.getGradeRanking = function() {
      return this.students.sort((a, b) => {
        const avgA = a.getAverageGrade();
        const avgB = b.getAverageGrade();
        return avgB - avgA;
      });
    };
  }
  
  const group1 = new Group();
  group1.addStudent(student1);
  console.log(group1.getGradeRanking());
  
  console.log(student1.hasOwnProperty('name')); 
  console.log(student1.hasOwnProperty('getInfo')); 
  
  console.log(Object.getPrototypeOf(student1));
  
  function SpecialStudent(name, surname, birthYear, courses) {
    Student.call(this, name, surname, birthYear, courses);
  }
  
  Object.setPrototypeOf(SpecialStudent.prototype, Student.prototype);
  
  const specialStudent1 = new SpecialStudent('Alice', 'Smith', 1995, ['Math']);
  console.log(specialStudent1 instanceof SpecialStudent); 
  console.log(specialStudent1 instanceof Student);
  
  console.log(Student.prototype.isPrototypeOf(specialStudent1)); 
  