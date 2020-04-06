import * as CodeMirror from 'codemirror';
import { yankGenerator } from './yank';
import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import 'codemirror/keymap/vim.js';
/**
 * Initialization data for the jupyterlab_vim-system-clipboard-support extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_vim-system-clipboard-support',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    let cm = CodeMirror as any;
    cm.Vim.defineOperator('yank', yankGenerator(cm.Vim.getRegisterController()));
  }
};

export default extension;
