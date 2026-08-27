export interface Proyecto {
  titulo: string;
  tipo: string;
  descripcion: string;
  detalles: string[];
  tecnologias: string[];
}

export interface CategoriaHabilidad {
  categoria: string;
  items: string[];
}

export interface Experiencia {
  titulo: string;
  organizacion: string;
  descripcion: string;
}

export interface Formacion {
  titulo: string;
  institucion: string;
  estado: string;
}

export interface Certificacion {
  titulo: string;
  emisor: string;
  descripcion: string;
}