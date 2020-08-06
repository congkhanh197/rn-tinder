import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {JSDOM} from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const {window} = jsdom;

function copyProps(src: any, target: any) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

const originalConsoleError = console.error;
console.error = (message: any) => {
  if (message.startsWith('Warning:')) {
    return;
  }
  originalConsoleError(message);
};
configure({adapter: new EnzymeAdapter()});
