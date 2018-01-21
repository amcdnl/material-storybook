import {storiesOf} from '@storybook/angular';
import {MatCardModule, MatButtonModule} from '@angular/material';
import {text} from '@storybook/addon-knobs/angular';

storiesOf('Card', module)
  .add('Basic', () => ({
    template: `
    <div>
      <mat-card>{{label}}</mat-card>
    </div>
    `,
    props: {
      label: text('label', 'A simple card')
    },
    moduleMetadata: {
      imports: [MatCardModule]
    }
  }))
  .add('Complex', () => ({
    template: `
    <div>
      <mat-card style="width: 400px; margin: 0 auto;">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>Shiba Inu</mat-card-title>
          <mat-card-subtitle>Dog Breed</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src="http://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
        <mat-card-content>
          <p>
            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>LIKE</button>
          <button mat-button>SHARE</button>
        </mat-card-actions>
      </mat-card>
    </div>
    `,
    moduleMetadata: {
      imports: [MatCardModule, MatButtonModule]
    }
  }))