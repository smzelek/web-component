import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  render() {
    return (
      <button 
        onClick={(el) => (el.target as HTMLButtonElement).focus()}>
        Wonderful Web Component
      </button>
    );
  }
}
