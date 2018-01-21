import {storiesOf} from '@storybook/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule, MatFormFieldModule} from '@angular/material';
import {array, boolean, text, object} from '@storybook/addon-knobs/angular';
import {action} from '@storybook/addon-actions';

storiesOf('Select', module)
  .add('Single Select', () => ({
    template: `
    <div>
      <mat-form-field>
        <mat-select (change)="onChange($event)" [placeholder]="placeholder" [disabled]="disabled">
          <mat-option *ngFor="let food of foods" [value]="food">
            {{food}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    `,
    props: {
      foods: array('foods', [
        'Pizza',
        'Burgers',
        'Steak',
        'Tacos'
      ]),
      placeholder: text('placeholder', 'Favorite food'),
      disabled: boolean('disabled', false),
      onChange: action('change')
    },
    moduleMetadata: {
      imports: [MatFormFieldModule, BrowserAnimationsModule, MatSelectModule]
    }
  }))
  .add('Multi Select', () => ({
    template: `
    <div>
      <mat-form-field>
        <mat-select (change)="onChange($event)" [placeholder]="placeholder" multiple [disabled]="disabled">
          <mat-option *ngFor="let food of foods" [value]="food">
            {{food}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    `,
    props: {
      foods: array('foods', [
        'Pizza',
        'Burgers',
        'Steak',
        'Tacos'
      ]),
      placeholder: text('placeholder', 'Favorite food'),
      disabled: boolean('disabled', false),
      onChange: action('change')
    },
    moduleMetadata: {
      imports: [MatFormFieldModule, BrowserAnimationsModule, MatSelectModule]
    }
  }))
  .add('Groups', () => ({
    template: `
    <div>
      <mat-form-field>
        <mat-select (change)="onChange($event)" [placeholder]="placeholder" [disabled]="disabled">
          <mat-option>-- None --</mat-option>
          <mat-optgroup *ngFor="let group of foodGroups" [label]="group.name">
            <mat-option *ngFor="let food of group.foods" [value]="food">
              {{food}}
            </mat-option>
          </mat-optgroup>
        </mat-select>
      </mat-form-field>
    </div>
    `,
    props: {
      foodGroups: object('foodGroups', [
        {
          name: 'Fruit',
          foods: [
            'Apple',
            'Orange'
          ]
        },
        {
          name: 'Vegetables',
          foods: [
            'Lettuce',
            'Broccoli'
          ]
        },
        {
          name: 'Meats',
          foods: [
            'Steak',
            'Chicken'
          ]
        }
      ]),
      disabled: boolean('disabled', false),
      placeholder: text('placeholder', 'Foods'),
      onChange: action('change')
    },
    moduleMetadata: {
      imports: [MatFormFieldModule, BrowserAnimationsModule, MatSelectModule]
    }
  }));
