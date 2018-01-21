import {storiesOf} from '@storybook/angular';
import {MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

storiesOf('Tabs', module)
  .add('Basic', () => ({
    template: `
    <div>
      <mat-tab-group>
        <mat-tab label="Tab 1">Content 1</mat-tab>
        <mat-tab label="Tab 2">Content 2</mat-tab>
      </mat-tab-group>
    </div>
    `,
    moduleMetadata: {
      imports: [BrowserAnimationsModule, MatTabsModule]
    }
  }));
