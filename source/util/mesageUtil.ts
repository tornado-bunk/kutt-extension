import {browser} from 'webextension-polyfill-ts';

const messageUtil = {
  send(name: string, params?: unknown): Promise<any> {
    const data = {
      action: name,
      params,
    };

    return browser.runtime.sendMessage(data);
  },
};

export default messageUtil;
