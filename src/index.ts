import * as CodeMirror from 'codemirror';
import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import 'codemirror/keymap/vim.js';

/**
 * cursor position functions not exposed by CodeMirrr.Vim
 */
function cursorIsBefore(cur1: any, cur2: any) {
  if (cur1.line < cur2.line) {
    return true;
  }
  if (cur1.line == cur2.line && cur1.ch < cur2.ch) {
    return true;
  }
  return false;
}
function cursorMin(...args: any[]): any{
  let cur2;
  if (args.length > 2) {
    cur2 = cursorMin.apply(undefined, Array.prototype.slice.call(args, 1));
  } else{
    cur2 = args[1];
  }
  return cursorIsBefore(args[0], cur2) ? args[0] : cur2;
}
/**
 * yank with system register copying enabled
 */

function yankGenerator(registerController: any){
  function yank(cm: any, args: any, ranges: any, oldAnchor: any) {
  var vim = cm.state.vim;
  var text = cm.getSelection();
  var endPos = vim.visualMode
    ? cursorMin(vim.sel.anchor, vim.sel.head, ranges[0].head, ranges[0].anchor)
    : oldAnchor;
  if (['+', '*'].indexOf(args.registerName) !== -1) {
    navigator.clipboard.writeText(text).catch(err => {
      // This can happen if the user denies clipboard permissions:
      // or if using firefox
      console.error('Could not copy text: ', err);
    });
    cm.focus()
  }
  registerController.pushText(
      args.registerName, 'yank',
      text, args.linewise, vim.visualBlock);
  return endPos;
  }
  return yank
}
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
