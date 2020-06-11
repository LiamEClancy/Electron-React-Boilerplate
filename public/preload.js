const electron = require('electron');
const { dialog } = require('electron').remote;
window.electron = {};
window.electron.dialog = dialog;
window.fs = electron.remote.require('fs');
