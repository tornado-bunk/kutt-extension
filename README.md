<div align="center"><img width="150" src="source/assets/logo.png" /></div>
<h1 align="center">kutt-extension</h1>
<p align="center">Browser extension for <a href="https://kutt.it">Kutt.it</a></p>

<div align="center">
  <strong>⚠️ AI ASSISTED UPDATE ⚠️</strong>
  <p>Questa versione è stata aggiornata con l'assistenza di AI per garantire la compatibilità con le implementazioni più recenti dell'API Kutt v2.</p>
  <p>I domini personalizzati sono stati temporaneamente disabilitati per evitare errori API, mentre tutte le altre funzionalità sono operative.</p>
</div>

<div align="center">
  <a href="https://travis-ci.com/thedevs-network/kutt-extension">
    <img src="https://travis-ci.com/thedevs-network/kutt-extension.svg?branch=master" alt="Travis Build" />
  </a>
  <a href="https://github.com/thedevs-network/kutt-extension/releases/latest">
    <img src="https://img.shields.io/github/release/thedevs-network/kutt-extension.svg?colorB=blue" alt="Releases" />
  </a>
  <a href="https://github.com/thedevs-network/kutt-extension/issues?q=is%3Aopen+is%3Aissue">
    <img src="https://img.shields.io/github/issues-raw/thedevs-network/kutt-extension.svg?colorB=lightgrey" alt="Open Issues" />
  </a>
  <a href="https://github.com/thedevs-network/kutt-extension/issues?q=is%3Aissue+is%3Aclosed">
    <img src="https://img.shields.io/github/issues-closed-raw/thedevs-network/kutt-extension.svg?colorB=red" alt="Closed Issues" />
  </a>
  <a href="https://david-dm.org/thedevs-network/kutt-extension">
    <img src="https://img.shields.io/david/thedevs-network/kutt-extension.svg?colorB=orange" alt="DEPENDENCIES" />
  </a>
  <a href="https://github.com/thedevs-network/kutt-extension/blob/master/license">
    <img src="https://img.shields.io/github/license/thedevs-network/kutt-extension.svg" alt="LICENSE" />
  </a>
</div>
<hr />

## 🚀 Recent Updates

Questa versione include i seguenti miglioramenti:
- ✅ Corretta la funzione shortenUrl per utilizzare il parametro 'customurl' invece di 'address'
- ⚠️ Disabilitati i domini personalizzati per evitare errori API
- 📝 Aggiunto logging dettagliato per facilitare il debug
- 🛠️ Migliorata la gestione degli errori nell'interfaccia utente
- ✅ Verificata la compatibilità con Firefox e server Kutt selfhosted

❤️ it? ⭐️ it on [GitHub](https://github.com/thedevs-network/kutt-extension/stargazers)

## Features

- Minimal UI
- Instant QR Code
- Cross Browser Support
- Supports Secure Passwords for URLs
- History & Incognito Feature
- Auto Copy Feature
- Free and Open Source
- Uses WebExtensions API

## Browser Support

| [![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](https://chrome.google.com/webstore/detail/kutt/pklakpjfiegjacoppcodencchehlfnpd) | [![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](https://addons.mozilla.org/firefox/addon/kutt/) | [![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](CONTRIBUTING.md#for-opera-users) | [![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](https://chrome.google.com/webstore/detail/kutt/pklakpjfiegjacoppcodencchehlfnpd) | [![Yandex](https://raw.github.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png)](https://chrome.google.com/webstore/detail/kutt/pklakpjfiegjacoppcodencchehlfnpd) | [![Brave](https://raw.github.com/alrra/browser-logos/master/src/brave/brave_48x48.png)](https://chrome.google.com/webstore/detail/kutt/pklakpjfiegjacoppcodencchehlfnpd) | [![vivaldi](https://raw.github.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png)](https://chrome.google.com/webstore/detail/kutt/pklakpjfiegjacoppcodencchehlfnpd) |
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 49 & later ✔ | 52 & later ✔ | 36 & later ✔ | 79 & later ✔ | Latest ✔ | Latest ✔ | Latest ✔

## How to use

- Download for browser(s)

  - Chrome: [Kutt :: Chrome Web Store](https://chrome.google.com/webstore/detail/kutt/pklakpjfiegjacoppcodencchehlfnpd)
  - Firefox: [Kutt :: Add-ons for Firefox](https://addons.mozilla.org/firefox/addon/kutt/)
  - Opera [Kutt :: Opera addons](CONTRIBUTING.md#for-opera-users)
  - Edge: [Kutt :: Chrome Web Store](https://chrome.google.com/webstore/detail/kutt/pklakpjfiegjacoppcodencchehlfnpd)

- Generate an API Key from <a href="https://kutt.it">`https://kutt.it/`</a> after signing up. (Settings page)

  <img width="400" src="https://i.imgur.com/qQwqeH5.png" />

- Paste and Save this `Key` in extension's `options page` when asked.

 <hr />

## Screenshots

<div>
  <img width="250" src="./.github/assets/popup-v4-1.png" alt="popup" />
  <div>_</div>
  <img width="330" src="./.github/assets/options-v4-1.png" alt="options" />
</div>

<br />

## Note

- <a href="https://kutt.it">Kutt.it</a> API permits **50** URLs shortening per day using the API Key.
- **Enable Custom Host** option to use with self-hosted kutt
  - Save the self hosted domain in the input (eg: <https://mykutt.it>)
    - **Note**: la funzione custom domain è temporaneamente disabilitata in questa versione a causa di problemi di compatibilità API.
- _Delay at times while shortening might be the issue with Kutt.it API and not with the extension's._

## Contributing and Support

View the Contributing guidelines [here](CONTRIBUTING.md).

Original Repo: [thedevs-network/kutt](https://github.com/thedevs-network/kutt)

## Licence

Code released under the [MIT License](license).
