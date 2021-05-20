import React, { FC } from 'react';

type ListBoxItemProps = {
  className?: string;
  onSelect?: string;
};

const ListBoxItem: FC<ListBoxItemProps> = ({ className }) => {
  return <div className={`${className}`}>{}</div>;
};

type ListBoxProps = {
  className?: string;
  onItemSelect?: string;
};

const ListBox: FC<ListBoxProps> = ({ className }) => {
  return <div className={`${className}`}>{}</div>;
};

export default ListBox;
