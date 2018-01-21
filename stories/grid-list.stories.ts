import {storiesOf} from '@storybook/angular';
import {MatGridListModule} from '@angular/material';
import {object} from '@storybook/addon-knobs/angular';

storiesOf('Grid List', module)
  .add('Basic', () => ({
    template: `
    <div>
      <mat-grid-list cols="4" rowHeight="100px">
        <mat-grid-tile
            *ngFor="let tile of tiles"
            [colspan]="tile.cols"
            [rowspan]="tile.rows"
            [style.background]="tile.color">
          {{tile.text}}
        </mat-grid-tile>
      </mat-grid-list>
    </div>
    `,
    props: {
      tiles: object('tiles', [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      ])
    },
    moduleMetadata: {
      imports: [MatGridListModule]
    }
  }));
