import { Component } from "@angular/core";

@Component({

    selector: "app-hero",
    templateUrl: "./hero.component.html"
})
export class HeroComponent {

    public name: string = "Superman";
    public age: number = 45;

    /*public obtainData(): string {

        return `${this.name} - ${this.age}`
    }*/
    get obtainData(): string {

        return `${this.name} - ${this.age}`
    }

    changeName(): void {

        this.name = "Spiderman"
    }

    changeAge(): void {

        this.age = 30;
    }
}