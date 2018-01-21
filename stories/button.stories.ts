import {storiesOf} from '@storybook/angular';
import {MatButtonModule, MatIconModule} from '@angular/material';

storiesOf('Button', module)
  .add('Basic', () => ({
    template: `
    <div>
      <button mat-button>Basic</button>
      <button mat-button color="primary">Primary</button>
      <button mat-button color="accent">Accent</button>
      <button mat-button color="warn">Warn</button>
      <button mat-button disabled>Disabled</button>
    </div>
    `,
    moduleMetadata: {
      imports: [MatButtonModule]
    }
  }))
  .add('Raised', () => ({
    template: `
    <div>
      <button mat-raised-button>Basic</button>
      <button mat-raised-button color="primary">Primary</button>
      <button mat-raised-button color="accent">Accent</button>
      <button mat-raised-button color="warn">Warn</button>
      <button mat-raised-button disabled>Disabled</button>
    </div>
    `,
    moduleMetadata: {
      imports: [MatButtonModule]
    }
  }))
  .add('Icons', () => ({
    template: `
    <div>
      <button mat-icon-button>
        <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
      </button>
      <button mat-icon-button color="primary">
        <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
      </button>
      <button mat-icon-button color="accent">
        <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
      </button>
      <button mat-icon-button color="warn">
        <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
      </button>
      <button mat-icon-button disabled>
        <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
      </button>
    </div>
    `,
    moduleMetadata: {
      imports: [MatButtonModule, MatIconModule]
    }
  }))
  .add('Fab', () => ({
    template: `
    <div>
      <button mat-fab>Basic</button>
      <button mat-fab color="primary">Primary</button>
      <button mat-fab color="accent">Accent</button>
      <button mat-fab color="warn">Warn</button>
      <button mat-fab disabled>Disabled</button>
      <button mat-fab>
        <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
      </button>
    </div>
    `,
    moduleMetadata: {
      imports: [MatButtonModule, MatIconModule]
    }
  }))
  .add('Mini Fab', () => ({
    template: `
    <div>
      <button mat-mini-fab>Basic</button>
      <button mat-mini-fab color="primary">Primary</button>
      <button mat-mini-fab color="accent">Accent</button>
      <button mat-mini-fab color="warn">Warn</button>
      <button mat-mini-fab disabled>Disabled</button>
      <button mat-mini-fab>
        <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
      </button>
    </div>
    `,
    moduleMetadata: {
      imports: [MatButtonModule, MatIconModule]
    }
  }));

