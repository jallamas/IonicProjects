import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.interface';
import { AlumnoService } from '../../alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
  }

}
