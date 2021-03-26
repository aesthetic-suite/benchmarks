import jsdom from 'jsdom';

const dom = new jsdom.JSDOM(
  '<!DOCTYPE html><html><head><title>Benchmarks</title></head><body></body></html>',
);

global.window = dom.window;
global.document = dom.window.document;
