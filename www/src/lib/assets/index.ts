import * as AntIcon from '@ant-design/icons';
import React from 'react';

export const getFullUrl = (path: string): string => {
  return `/${path}`;
};

export const getAntIcon = (
  name: string,
): React.ComponentType<{ style: any }> => {
  return AntIcon[name];
};
