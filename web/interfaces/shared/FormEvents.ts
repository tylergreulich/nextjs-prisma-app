import * as React from 'react';

export type TextAreaOrInputElementEvent =
  | TextAreaElementEvent
  | InputElementEvent;

export type FormElementEvent = React.FormEvent<HTMLFormElement>;
export type InputElementEvent = React.ChangeEvent<HTMLInputElement>;
export type TextAreaElementEvent = React.ChangeEvent<HTMLTextAreaElement>;
