import {storiesOf} from '@storybook/angular';
import {MatButtonToggleModule, MatIconModule} from '@angular/material';
import {boolean} from '@storybook/addon-knobs/angular';
import {action} from '@storybook/addon-actions';

storiesOf('Button Toggle', module)
  .add('Basic', () => ({
    template: `
    <div>
      <mat-button-toggle-group #group="matButtonToggleGroup" [vertical]="vertical" (change)="onChange($event)">
        <mat-button-toggle value="left" [disabled]="disabled">
          <mat-icon>format_align_left</mat-icon>
        </mat-button-toggle>
        <mat-button-toggle value="center" [disabled]="disabled">
          <mat-icon>format_align_center</mat-icon>
        </mat-button-toggle>
        <mat-button-toggle value="right" [disabled]="disabled">
          <mat-icon>format_align_right</mat-icon>
        </mat-button-toggle>
        <mat-button-toggle value="justify" [disabled]="disabled">
          <mat-icon>format_align_justify</mat-icon>
        </mat-button-toggle>
      </mat-button-toggle-group>
    </div>
    `,
    props: {
      disabled: boolean('disabled', false),
      vertical: boolean('vertical', false),
      onChange: action('change')
    },
    moduleMetadata: {
      imports: [MatButtonToggleModule, MatIconModule]
    }
  }));