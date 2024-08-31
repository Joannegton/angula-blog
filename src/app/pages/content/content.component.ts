import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFake } from '../../data/datafake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input() photoCover:string = "https://files.tecnoblog.net/wp-content/uploads/2022/09/stable-diffusion-imagem.jpg"
  @Input() contentTitle: string = ""
  @Input() contentDescription:string = ""
  @Input() id:string | null = ""
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = param.get('id')
    })

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = DataFake.filter(article => article.id == id)[0]

      this.contentTitle = result.title 
      this.contentDescription = result.description  
      this.photoCover = result.photo
  }
}
