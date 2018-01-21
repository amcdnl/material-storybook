import {storiesOf} from '@storybook/angular';
import {MatCheckboxModule} from '@angular/material';
import {action} from '@storybook/addon-actions';
import {boolean, text} from '@storybook/addon-knobs/angular';

storiesOf('Checkbox', module)
  .add('Basic', () => ({
    template: `
    <div>
      <mat-checkbox [disabled]="disabled" (change)="onChange($event)">
        {{label}}
      </mat-checkbox>
    </div>
    `,
    props: {
      disabled: boolean('disabled', false),
      label: text('label', 'Check me'),
      onChange: action('change')
    },
    moduleMetadata: {
      imports: [MatCheckboxModule]
    }
  }));
