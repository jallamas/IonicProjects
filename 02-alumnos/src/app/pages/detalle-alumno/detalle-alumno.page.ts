import { Component, OnInit, Input } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.interface';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from 'src/app/alumno.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.page.html',
  styleUrls: ['./detalle-alumno.page.scss'],
})
export class DetalleAlumnoPage implements OnInit {
  private alumno: Alumno;

  constructor(private route: ActivatedRoute, private alumnoService: AlumnoService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let alumnoId = this.route.snapshot.paramMap.get('id');
    this.alumno = this.alumnoService.getAlumno(alumnoId);
  }
}
