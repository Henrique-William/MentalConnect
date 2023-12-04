import { Component } from '@angular/core';
import { MedicoService } from 'src/app/service/medico.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  listaLivros: [];
  campoBusca: string = ''

  constructor(private service: MedicoService) { }

  buscarMedicos(){
    this.service.buscar(this.campoBusca).subscribe(
      (retornoAPI) => console.log(retornoAPI),
      (error) => console.log(error)
    )
  }

}



