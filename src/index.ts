import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the jupyterlab_vim-system-clipboard-support extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_vim-system-clipboard-support',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_vim-system-clipboard-support is activated!');
  }
};

export default extension;
