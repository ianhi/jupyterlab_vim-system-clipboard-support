import * as CodeMirror from 'codemirror';
import { yankGenerator } from './yank';
import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import 'codemirror/keymap/vim.js';
/**
 * Initialization data for the jupyterlab_vim-system-clipboard-support extension.
 */
const PLUGIN_ID = 'jupyterlab_vim-system-clipboard-support:clipboard'
const extension: JupyterFrontEndPlugin<void> = {
  id: PLUGIN_ID,
  autoStart: true,
  requires: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settings: ISettingRegistry) => {
    function loadSetting(setting: ISettingRegistry.ISettings): void {
      const unnamedplus = setting.get('unnamedplus').composite as boolean;
      let cm = CodeMirror as any;
      cm.Vim.defineOperator('yank', yankGenerator(cm.Vim.getRegisterController(), unnamedplus));
    }

    // Wait for the application to be restored and
    // for the settings for this plugin to be loaded
    Promise.all([app.restored, settings.load(PLUGIN_ID)]).then(
      ([, setting]) => {
        // read the settings
        loadSetting(setting);

        setting.changed.connect(loadSetting);
      }
    );
  }
};

export default extension;
