import { Injectable } from '@angular/core';
import { Proyecto, CategoriaHabilidad, Experiencia, Formacion, Certificacion } from '../models/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  
  getPerfil() {
    return {
      nombre: 'Juan Jesús Vázquez Martín del Campo',
      titulo: 'Computer Systems Engineering Student · 7th Semester',
      ubicacion: 'Aguascalientes, Mexico',
      email: 'juanjesusvazquezmc@gmail.com',
      github: 'https://github.com/jesusvazquezmc',
      resumen: 'Computer Systems Engineering student at the Autonomous University of Aguascalientes. Strong foundations in software development, backend technologies, distributed architectures, and database design, with hands-on experience building web applications, REST APIs, messaging services, and containerized environments.'
    };
  }

  getProyectos(): Proyecto[] {
    return [
      {
        titulo: 'Distributed Processing System with Apache Kafka',
        tipo: 'Academic Project',
        descripcion: 'Distributed processing environment for real-time communication and event streaming.',
        detalles: [
          'Configured multi-broker clusters with Docker and Docker Compose.',
          'Built Node.js producers and consumers integrated with Zookeeper.'
        ],
        tecnologias: ['Apache Kafka', 'Docker', 'Docker Compose', 'Zookeeper', 'Node.js']
      },
      {
        titulo: 'PokeGo Cards – Full-stack Web Application',
        tipo: 'Academic Project',
        descripcion: 'Web platform for interactive data discovery and management.',
        detalles: [
          'Built a reactive Angular interface.',
          'Connected a Node.js backend to a MySQL database.'
        ],
        tecnologias: ['Angular', 'Node.js', 'MySQL', 'JavaScript', 'HTML5', 'CSS3']
      },
      {
        titulo: 'JerseyDB – Client-server Data Management',
        tipo: 'Academic Project',
        descripcion: 'Client-server architecture for distributed data record management.',
        detalles: [
          'Implemented CRUD services and endpoints with Express.js and MySQL.'
        ],
        tecnologias: ['Node.js', 'Express.js', 'MySQL', 'JavaScript', 'HTML5', 'CSS3']
      },
      {
        titulo: 'NoSQL Applications and Data Management',
        tipo: 'Academic Project',
        descripcion: 'Deployment of NoSQL databases in decoupled environments.',
        detalles: [
          'Designed documents and advanced aggregation pipelines with MongoDB Shell.'
        ],
        tecnologias: ['MongoDB', 'Docker', 'Docker Compose', 'MongoDB Shell']
      }
    ];
  }

  getHabilidades(): CategoriaHabilidad[] {
    return [
      { categoria: 'Programming Languages', items: ['C', 'C++', 'C#', 'JavaScript', 'Python', 'SQL'] },
      { categoria: 'Web & Backend Engineering', items: ['HTML5', 'CSS3', 'Angular', 'React', 'Node.js', 'Express.js', 'REST APIs', 'gRPC'] },
      { categoria: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL', 'IndexedDB'] },
      { categoria: 'Distributed Systems & DevOps', items: ['Apache Kafka', 'Docker', 'Docker Compose', 'Zookeeper', 'Git', 'GitHub'] }
    ];
  }

  getExperiencia(): Experiencia[] {
    return [
      {
        titulo: 'Web and backend development',
        organizacion: 'Academic projects',
        descripcion: 'Built web applications, REST APIs, distributed messaging services, and database-backed solutions.'
      },
      {
        titulo: 'Distributed architectures',
        organizacion: 'Technical work',
        descripcion: 'Configured environments with Docker, Apache Kafka, multi-broker clusters, and producer-consumer communication.'
      }
    ];
  }

  getFormacion(): Formacion[] {
    return [
      {
        titulo: 'Computer Systems Engineering',
        institucion: 'Autonomous University of Aguascalientes',
        estado: '7th semester in progress'
      }
    ];
  }

  getCertificaciones(): Certificacion[] {
    return [
      {
        titulo: 'Mendix Intermediate / Rapid Developer Certification',
        emisor: 'Mendix',
        descripcion: 'Certification focused on application development through the Mendix low-code platform.'
      }
    ];
  }
}