import { Component } from '@angular/core';

@Component({

    selector: 'app-add-counter',
    template: `
        <h1>{{ title }}</h1>
        <h2>The base is: {{ base }}</h2>
        <button (click)='accumulate(base)'>+{{ base }}</button>
        <span> {{ counter }} </span>
        <button (click)='accumulate(-base)'>-{{ base }}</button>
    `
})
export class CounterComponent {

    public title = 'Counter';
    public counter: number = 0;
    public base: number = 5;

    public increment() {

        this.counter += 1;
    }

    public decrement() {

        this.counter -= 1;
    }

    public accumulate(value: number) {

        this.counter += value;
    }
}