/* eslint-disable @typescript-eslint/no-explicit-any */
declare let global: any;

const commonjsGlobal =
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
    ? global
    : typeof self !== 'undefined'
    ? self
    : {};

(function () {
  if (!commonjsGlobal.KeyboardEvent) {
    commonjsGlobal.KeyboardEvent = (_eventType: any, _init: any) => {};
  }
})();

export type CustomKeyboardEvent = KeyboardEvent;
