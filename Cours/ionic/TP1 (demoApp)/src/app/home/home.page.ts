import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Student } from "../student/student";
import { StudentService } from "../services/student.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  pageTitle: string = "Démo";
  students: Student[] = [];
  message: string = "";
  rawHtml: boolean = false;

  constructor(private router: Router, private studentService: StudentService) {
    this.studentService.findAll().subscribe((students: Student[]) => {
      this.students = students;
      //console.log(this.students);
      this.countAlternant();
    });
  }

  onClick(studentId: number) {
    // Utilisation du routeur pour changer de page
    this.router.navigate(["/student/" + studentId]);
  }

  onChange(studentName: string) {
    //console.log(studentName);
    for (let i = 0; i < this.students.length; i++) {
      if (studentName == this.students[i].name) {
        this.students[i].alternant = !this.students[i].alternant; // true devient false et inversement
        break; // sortie de boucle car l'étudiant a été trouvé
      }
    }
    this.countAlternant();
  }

  countAlternant() {
    let numAlternants = 0;
    this.students.forEach((student) => {
      if (student.alternant) numAlternants++;
    });
    if (numAlternants == 1) {
      this.message = numAlternants + " étudiant en alternance";
    } else {
      this.message = numAlternants + " étudiants en alternance";
    }
  }
}
