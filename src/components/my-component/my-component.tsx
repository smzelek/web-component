import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  
  @Element() el!: HTMLElement;

  render() {
    return (
      <button 
        ref={(el) => this.el = el}
        onClick={() => this.el.focus()}>
        Wonderful Web Component
      </button>
    );
  }
}
