export interface IPost {
    id: number;
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    categoria: Categoria;
    fecha?: Date;
}

export enum Categoria {
    chorradas = 'Chorradas',
    noticias = 'Noticias',
    promociones = 'Promociones',
    contenidoDeInteres = 'Interés'
}
