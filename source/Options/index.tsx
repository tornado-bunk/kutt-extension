import {ThemeProvider} from 'styled-components';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

// Common styles
import '../styles/main.scss';

import {ExtensionSettingsProvider} from '../contexts/extension-settings-context';
import {RequestStatusProvider} from '../contexts/request-status-context';
import Options from './Options';

import theme from '../styles/base/_variables.module.scss';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ExtensionSettingsProvider>
      <RequestStatusProvider>
        <Options />
      </RequestStatusProvider>
    </ExtensionSettingsProvider>
  </ThemeProvider>,
  document.getElementById('options-root')
);
