import {storiesOf} from '@storybook/angular';
import {MatToolbarModule, MatIconModule} from '@angular/material';
import {text} from '@storybook/addon-knobs/angular';

storiesOf('Toolbar', module)
  .add('Basic', () => ({
    template: `
    <div>
      <mat-toolbar>{{title}}</mat-toolbar>
    </div>
    `,
    props: {
      title: text('title', 'My App')
    },
    moduleMetadata: {
      imports: [MatToolbarModule]
    }
  }))
  .add('Multi Row', () => ({
    template: `
    <div>
      <mat-toolbar color="primary">
        <span>{{title}}</span>
        <mat-toolbar-row>
          <span>Second Line</span>
          <span style="flex: 1 1 auto;"></span>
          <mat-icon style="padding: 0 14px;">verified_user</mat-icon>
        </mat-toolbar-row>
        <mat-toolbar-row>
          <span>Third Line</span>
          <span style="flex: 1 1 auto;"></span>
          <mat-icon style="padding: 0 14px;">favorite</mat-icon>
          <mat-icon style="padding: 0 14px;">delete</mat-icon>
        </mat-toolbar-row>
      </mat-toolbar>
    </div>
    `,
    props: {
      title: text('title', 'My App')
    },
    moduleMetadata: {
      imports: [MatToolbarModule, MatIconModule]
    }
  }))
