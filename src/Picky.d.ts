import * as React from 'react';

import {
  RenderListProps,
  SelectAllMode,
  RenderSelectAllProps,
  RenderProps,
  OptionsType,
  OptionType,
  ComplexOptionType,
  SelectionState,
} from './types';

export default class Picky extends React.PureComponent<PickyProps, PickyState> {
  new(props: any, context?: any);
}

type PickyState = {
  selectedValue: OptionsType | OptionType | null;
  open?: boolean;
  filtered?: boolean;
  filteredOptions: OptionsType;
  allSelected: SelectionState;
};

type PickyProps = {
  /**
   * The ID for the component, used for accessibility
   *
   * @type {string}
   * @memberof PickyProps
   */
  id: string;
  /**
   * Default placeholder text
   *
   * @type {string}
   * @memberof PickyProps
   */
  placeholder?: string;

  /**
   * The value of the Picky.
   * Picky is a controlled component so use this in conjunction with onChange and update the value accordingly
   *
   * @type {PickyValue}
   * @memberof PickyProps
   */
  value?: OptionsType | OptionType;

  /**
   * The number of items to be displayed before the placeholder turns to "5 selected"
   *
   * @type {number} [3]
   * @memberof PickyProps
   */
  numberDisplayed?: number;

  /**
   * True if multiple options can be selected
   *
   * @type {boolean}
   * @memberof PickyProps
   */
  multiple?: boolean;

  /**
   * Options for the Picky component either [1, 2, 3] or [{label: "1", value: 1}] in conjunction with valueKey and labelKey props
   *
   * @type {any[]} [[]]
   * @memberof PickyProps
   */
  options: any[];

  /**
   * Called when the selected value changes, use this to re-set the value prop
   *
   * @memberof PickyProps
   */
  onChange: (value: OptionsType | OptionType) => any;

  /**
   * Used to control whether the Picky is open by default
   *
   * @type {boolean}
   * @memberof PickyProps
   */
  open?: boolean;

  /**
   * True if you want a select all option at the top of the dropdown.
   * Won't appear if multiple is false
   *
   * @type {boolean}
   * @memberof PickyProps
   */
  includeSelectAll?: boolean;

  /**
   * True if you want a filter input at the top of the dropdown, used to filter items.
   *
   * @type {boolean}
   * @memberof PickyProps
   */
  includeFilter?: boolean;

  /**
   * Used to debounce onFilterChange events. Set value to zero to disable debounce. Duration is in milliseconds.
   *
   * @type {number} [300]
   * @memberof PickyProps
   */
  filterDebounce?: number;

  /**
   * The max height of the dropdown, height is in px.
   *
   * @type {number} [300]
   * @memberof PickyProps
   */
  dropdownHeight?: number;

  /**
   * Callback when options have been filtered.
   *
   * @memberof PickyProps
   */
  onFiltered?: (filteredOptions: any[]) => any;

  /**
   * Called when dropdown is opened
   *
   * @memberof PickyProps
   */
  onOpen?: () => any;

  /**
   * Called when dropdown is closed
   *
   * @memberof PickyProps
   */
  onClose?: () => any;

  /**
   *  Indicates which key is the value in an object. Used when supplied options are objects.
   *
   * @type {string}
   * @memberof PickyProps
   */
  valueKey?: string;
  /**
   *  Indicates which key is the label in an object. Used when supplied options are objects.
   *
   * @type {string}
   * @memberof PickyProps
   */
  labelKey?: string;

  /**
   * Render prop for individual options
   *
   * @memberof PickyProps
   */
  render?: (props: RenderProps) => any;

  /**
   * Tab index for accessibility
   *
   * @type {PickyTabIndex} [0]
   * @memberof PickyProps
   */
  tabIndex?: number | undefined;

  /**
   * True if the dropdown should be permanently open.
   *
   * @type {boolean}
   * @memberof PickyProps
   */
  keepOpen?: boolean;

  /**
   * The placeholder when the number of items are higher than {numberDisplayed} and all aren't selected.
   * Default "%s selected" where %s is the number of items selected.
   *
   * @type {string} ["%s selected"]
   * @memberof PickyProps
   */
  manySelectedPlaceholder?: string;

  /**
   * Default "%s selected" where %s is the number of items selected. This gets used when all options are selected.
   *
   * @type {string} ["%s selected"]
   * @memberof PickyProps
   */
  allSelectedPlaceholder?: string;

  /**
   * Default select all text
   *
   * @type {string} ["Select all"]
   * @memberof PickyProps
   */
  selectAllText?: string;

  /**
   * Render prop for rendering a custom select all component
   *
   * @memberof PickyProps
   */
  renderSelectAll?: (props: RenderSelectAllProps) => any;

  /**
   * If set to true, will focus the filter by default when opened.
   *
   * @type {boolean}
   * @memberof PickyProps
   */
  defaultFocusFilter?: boolean;

  /**
   * Used to supply a class to the root picky component. Helps when using Picky with a CSS-in-JS library like styled-components
   *
   * @type {string}
   * @memberof PickyProps
   */
  className?: string;

  /**
   * Render prop for whole list, you can use this to add virtualization/windowing if necessary.
   *
   * @memberof PickyProps
   */
  renderList?: (props: RenderListProps) => any;

  /**
   * Override the placeholder of the filter
   *
   * @type {string}
   * @memberof PickyProps
   */
  filterPlaceholder?: string;
  /**
   * Will provide the input value of filter to the picky dropdown, so that if we have a larger list of options then we can only supply the matching options based on this value.
   */
  getFilterValue?: (term: string) => any;
  /**
   *  If true options will be returned when they match case, defaults to false
   */
  caseSensitiveFilter?: boolean;

  /**
   * Pass additional props the the button component
   *
   * @type {React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>}
   * @memberof PickyProps
   */
  buttonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

  /**
   * True if you want a disabled Picky
   */
  disabled?: boolean;

  /**
   * Allows for additional functionalty with select all and filtering, see the docs.
   */
  selectAllMode?: SelectAllMode;
  /**
   * When true the filter input will be cleared when the dropdown is closed
   *
   * @type {boolean}
   */
  clearFilterOnClose?: boolean;
};
