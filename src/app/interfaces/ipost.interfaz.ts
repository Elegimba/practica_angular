export interface IPost {
    id: number;
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    categoria: Categoria;
    fecha: Date;
}

export enum Categoria {
    Chorradas = 'chorradas',
    Noticias = 'noticias',
    Promociones = 'promociones',
    ContenidoDeInterés = 'interes'
}
