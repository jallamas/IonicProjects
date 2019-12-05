import { Injectable } from '@angular/core';
import { Alumno } from './models/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  public alumnos: Alumno[] = [
    {
      id: '1',
      nombre: 'José Antonio',
      apellidos: 'Llamas',
      curso: '2º DAM'
    },
    {
      id: '2',
      nombre: 'Esperanza',
      apellidos: 'Escacena',
      curso: '2º DAM'
    },
    {
      id: '3',
      nombre: 'Álvaro',
      apellidos: 'Márquez',
      curso: '2º DAM'
    },
    {
      id: '4',
      nombre: 'Mari Puri',
      apellidos: 'Fernández',
      curso: '1º Cocina'
    }
  ];
  constructor() { }

  public getAlumno(id: string): Alumno {
    return this.alumnos.find(alumno => alumno.id === id);
  }
}
