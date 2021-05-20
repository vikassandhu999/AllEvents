import React, { useMemo, useState } from 'react';
import { SearchIcon } from '@pluralsight/ps-design-system-icon';
import MultiSelect, { Option } from '@pluralsight/ps-design-system-multiselect';
import { Label } from '@pluralsight/ps-design-system-text';
import TextInput from '@pluralsight/ps-design-system-textinput';

export default function TagSelect() {
  const options = useMemo(
    () => [
      { label: 'Hydrogen', value: 'H' },
      { label: 'Helium', value: 'He' },
      { label: 'Lithium', value: 'Li' },
      { label: 'Beryllium', value: 'Be' },
      { label: 'Boron', value: 'B' },
      { label: 'Carbon', value: 'C' },
      { label: 'Nitrogen', value: 'N' },
      { label: 'Oxygen', value: 'O' },
      { label: 'Fluorine', value: 'F' },
      { label: 'Neon', value: 'Ne' },
      { label: 'Sodium', value: 'Na' },
      { label: 'Magnesium', value: 'Mg' },
      { label: 'Aluminum', value: 'Al' },
      { label: 'Silicon', value: 'Si' },
      { label: 'Phosphorus', value: 'P' },
    ],
    [],
  );
  const [value, setValue] = useState<Option[]>(options.slice(0, 2));

  return (
    <MultiSelect
      size={'medium'}
      onChange={(_, nextValue) => {
        setValue(nextValue);
      }}
      label={<Label size={Label.sizes.medium}>Add tags</Label>}
      options={options}
      prefix={<SearchIcon />}
      value={value}
    />
  );
}
