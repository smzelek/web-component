import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  render() {
    return (
      <button>
        Wonderful Web Component
        <div class="glow"></div>
      </button>
    );
  }
}
