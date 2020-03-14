import { isOSX } from '../../utils';
import React from 'react';

interface Props {
  hotkeys: string[];
}
const HotKeyChar = {
  Meta: isOSX ? '⌘' : 'Ctrl',
  Shift: isOSX ? '⇧' : 'Shift',
  Alt: isOSX ? '⌥' : 'Alt'
};
export function KeyboardHotKeyWidget(props: Props) {
  const { hotkeys } = props;
  const res = [];
  for (let i = 0; i < hotkeys.length; i++) {
    const hotkey = hotkeys[i];
    res.push(<kbd key={i}>{HotKeyChar[hotkey] || hotkey}</kbd>);
  }
  return <div>{res}</div>;
}
