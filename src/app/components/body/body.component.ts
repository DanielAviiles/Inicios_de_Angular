import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'No tiene nada de malo sentir miedo siempre y cuando no te dejes vencer',
        autor: 'Capitan America'
    };

    heroes: string[] = ['SpiderMan', 'Thor', 'Dr.Strange', 'Hulk', 'IronMan'];

}