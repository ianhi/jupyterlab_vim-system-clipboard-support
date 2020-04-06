# jupyterlab_vim-system-clipboard-support

![Github Actions Status](https://github.com/ianhi/jupyterlab_vim-system-clipboard-support/workflows/Build/badge.svg)

Adds support for yanking to using system clipboard using the registers `*` and `+`. This will affect both the builtin fileeditor and [jupyterlab_vim](https://github.com/jwkvam/jupyterlab-vim)

## Usage:
Running `"*y` or `"+y"` will yank to the vim registers used by jupyterlab and populate the system clipboard with the yanked text. Note that it does not distinguish between the system `*` and `+` registers on which are often distinct on Linux.

## Compatible browsers:
Firefox >= 63  
Chrome >= 66  
Edge >= 79  
Opera >= 53

See:
https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText#Browser_compatibility
This will only work on browsers that have implemented the writeText method
of the clipboardAPI. Currently only supports yanking to 


## Requirements

* JupyterLab >= 1.0  
It will also work with jupyterlab=2

## Install

```bash
jupyter labextension install jupyterlab_vim-system-clipboard-support
```

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
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension link .
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

