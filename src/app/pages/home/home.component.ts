import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { Proyecto, CategoriaHabilidad, Experiencia, Formacion, Certificacion } from '../../models/cv.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  perfil: any;
  proyectos: Proyecto[] = [];
  habilidades: CategoriaHabilidad[] = [];
  experiencia: Experiencia[] = [];
  formacion: Formacion[] = [];
  certificaciones: Certificacion[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.perfil = this.cvService.getPerfil();
    this.proyectos = this.cvService.getProyectos();
    this.habilidades = this.cvService.getHabilidades();
    this.experiencia = this.cvService.getExperiencia();
    this.formacion = this.cvService.getFormacion();
    this.certificaciones = this.cvService.getCertificaciones();
  }
}