import { createSnapComponent } from '../component';

/**
 * The props of the {@link Cell} component.
 *
 * @property value - The value to copy when the user clicks on the copyable
 * element.
 * @property sensitive - Whether the value is sensitive. If `true`, the value
 * will be hidden when the user is not interacting with the copyable element.
 */
export type CellProps = {
  image: string;
  title: string;
  description: string;
  value: string;
  valueExtra: string;
};

const TYPE = 'Cell';

/**
 * A copyable component, which is used to display text that can be copied by the
 * user.
 *
 * @param props - The props of the component.
 * @example
 * TODO
 */
export const Cell = createSnapComponent<CellProps, typeof TYPE>(TYPE);

/**
 * A cell element.
 *
 * @see Cell
 */
export type CellElement = ReturnType<typeof Cell>;
