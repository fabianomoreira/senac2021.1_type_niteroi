import { Categoria } from "./categoria/categoria.model";

export class CategoriasService {
    categorias: Categoria[] = [
        {id: 1, titulo: 'Terror', imagePath: '../../assets/images/dracula.png'},
        {id: 2, titulo: 'Aventura', imagePath: '../../assets/images/climbing.png'},
        {id: 3, titulo: 'Romance', imagePath: '../../assets/images/romance.png'},
        {id: 4, titulo: 'Comédia', imagePath: '../../assets/images/comedy.png'}
    ];

    constructor(){}

    listarCategorias(){
        return this.categorias;
    }
}