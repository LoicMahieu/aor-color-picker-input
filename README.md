# `<ColorInput>` for admin-on-rest

<ColorInput> component for admin-on-rest, useful for picking color in admin GUIs.

Binding of [`<ColorPicker />`](https://github.com/LoicMahieu/material-ui-color-picker) for [admin-on-rest](https://github.com/marmelab/admin-on-rest).

## Installation

```sh
npm install aor-color-input --save
```

## Usage

```js
import React from 'react'
import {
  DateInput,
  Edit,
  EditButton,
  LongTextInput,
  TextInput
} from 'admin-on-rest/mui'
import ColorInput from 'aor-color-input'

export const PostEdit = (props) => (
  <Edit>
    <TextInput source="title" />
    <ColorInput source="color" />
  </Edit>
)
```

## License

This library is licensed under the [MIT Licence](LICENSE), and sponsored by [iGLOO](https://igloo.be).
