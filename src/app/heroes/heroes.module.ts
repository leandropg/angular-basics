import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { HeroComponent } from './heroe/hero.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';

@NgModule({

    declarations: [

        HeroComponent,
        ListHeroesComponent
    ],
    exports: [
        HeroComponent,
        ListHeroesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}