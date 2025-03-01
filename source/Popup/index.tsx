import {ThemeProvider} from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';

// Common styles
import '../styles/main.scss';

import {ExtensionSettingsProvider} from '../contexts/extension-settings-context';
import {RequestStatusProvider} from '../contexts/request-status-context';
import Popup from './Popup';

import theme from '../styles/base/_variables.module.scss';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ExtensionSettingsProvider>
      <RequestStatusProvider>
        <Popup />
      </RequestStatusProvider>
    </ExtensionSettingsProvider>
  </ThemeProvider>,
  document.getElementById('popup-root')
);
