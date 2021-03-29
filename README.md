# DEPRECATED - NOW included in: https://github.com/ianhi/jupyterlab-vimrc

# jupyterlab_vim-system-clipboard-support

![Github Actions Status](https://github.com/ianhi/jupyterlab_vim-system-clipboard-support/workflows/Build/badge.svg)

Adds support for yanking to using system clipboard using the registers `*` and `+`. This will affect both the builtin fileeditor and [jupyterlab_vim](https://github.com/axelfahy/jupyterlab-vim)

I also recommend https://github.com/ianhi/jupyterlab-vimrc

## Usage:
Running `"*y` or `"+y"` will yank to the vim registers used by jupyterlab and populate the system clipboard with the yanked text. Note that it does not distinguish between the system `*` and `+` registers on which are often distinct on Linux.

### settings:
In jupyterlab open the `Settings Menu` then choose `Advanced Settings Editor` (or open with `ctrl+,`) and edit the `vim-system-clipboard` settings.
- **unnamedplus:** If true then yanking without specifying a register will fill the system clipboard. The unnamed register inside of codemirror vim mode will still be filled so you can use `p` as normal.

## Install

```bash
jupyter labextension install jupyterlab_vim-system-clipboard-support
```
## Requirements

* JupyterLab >= 1.0  
It will also work with jupyterlab=2

### Compatible browsers:
Firefox >= 63  
Chrome >= 66  
Edge >= 79  
Opera >= 53

See:
https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText#Browser_compatibility
This will only work on browsers that have implemented the writeText method
of the clipboardAPI. Currently only supports yanking to the system clipboard, for pasting you will need to use ctrl-v or Cmd-v.


## Contributing
Currently this doesn't support pasting from the `*` or `+` registers. This can be added by adding the paste
function in a similar manner to the yank function. A starting point is the paste function in codemirror/keymap/vim.js found [here](https://github.com/codemirror/CodeMirror/blob/7afb2d7e0c0759817c2eaa61345ca2ece5152fcc/keymap/vim.js#L2563). Unfortunately per https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText#Browser_compatibility this will not work on Firefox as it does not expose the `clipboard.readText` api outside of browser extensions.

### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to jupyterlab_vim-system-clipboard-support directory
# Install dependencies
jlpm
# Link your development version of the extension with JupyterLab
jupyter labextension install .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

### Uninstall

```bash
jupyter labextension uninstall jupyterlab_vim-system-clipboard-support
```

