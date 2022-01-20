import { InjectionToken } from '@angular/core';

export interface IConfig {
  suffix: string;
  prefix: string;
  thousandSeparator: string;
  decimalMarker: '.' | ',' | ['.', ','];
  clearIfNotMatch: boolean;
  showTemplate: boolean;
  showMaskTyped: boolean;
  placeHolderCharacter: string;
  shownMaskExpression: string;
  dropSpecialCharacters: boolean | string[];
  specialCharacters: string[];
  hiddenInput: boolean | undefined;
  validation: boolean;
  separatorLimit: string;
  allowNegativeNumbers: boolean;
  leadZeroDateTime: boolean;
  triggerOnMaskChange: boolean;
  patterns: {
    [character: string]: {
      pattern: RegExp;
      optional?: boolean;
      symbol?: string;
    };
  };
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export type optionsConfig = Partial<IConfig>;
export const config: InjectionToken<IConfig> = new InjectionToken('config');
export const NEW_CONFIG: InjectionToken<IConfig> = new InjectionToken('NEW_CONFIG');
export const INITIAL_CONFIG: InjectionToken<IConfig> = new InjectionToken('INITIAL_CONFIG');

export const initialConfig: IConfig = {
  suffix: '',
  prefix: '',
  thousandSeparator: ' ',
  decimalMarker: ['.', ','],
  clearIfNotMatch: false,
  showTemplate: false,
  showMaskTyped: false,
  placeHolderCharacter: '_',
  dropSpecialCharacters: true,
  hiddenInput: undefined,
  shownMaskExpression: '',
  separatorLimit: '',
  allowNegativeNumbers: false,
  validation: true,
  specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
  leadZeroDateTime: false,
  triggerOnMaskChange: false,
  patterns: {
    0: {
      pattern: new RegExp('\\d'),
    },
    9: {
      pattern: new RegExp('\\d'),
      optional: true,
    },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    X: {
      pattern: new RegExp('\\d'),
      symbol: '*',
    },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    A: {
      pattern: new RegExp('[a-zA-Z0-9]'),
    },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    S: {
      pattern: new RegExp('[a-zA-Z]'),
    },
    d: {
      pattern: new RegExp('\\d'),
    },
    m: {
      pattern: new RegExp('\\d'),
    },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    M: {
      pattern: new RegExp('\\d'),
    },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    H: {
      pattern: new RegExp('\\d'),
    },
    h: {
      pattern: new RegExp('\\d'),
    },
    s: {
      pattern: new RegExp('\\d'),
    },
  },
};

export const timeMasks: string[] = ['Hh:m0:s0', 'Hh:m0', 'm0:s0'];

export const withoutValidation: string[] = [
  'percent',
  'Hh',
  's0',
  'm0',
  'separator',
  'd0/M0/0000',
  'd0/M0',
  'd0',
  'M0',
];
