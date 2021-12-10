import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

export class Usuario {
    constructor(
        public email: string,
        public nombre: string,
        public password: string,
        public img?: string,
        public google?: boolean,
        public role?: string,
        public uid?: string,
    ){}

    get imageUrl(){
        //http://localhost:3000/api/upload/usuario/2d71f22a-0975-42c9-971d-e76dd669c6ea8.png
        if (this.img) {
            return `${ base_url }/upload/usuario/${ this.img }`;
        } else {
            return `${ base_url }/upload/usuario/no_image`;
        }
    }
}