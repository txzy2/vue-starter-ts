/**
 * Types for loader components
 */
export type loaderProps = {
  /** Flag indicating whether the loader is active */
  isLoading: boolean;

  /** Loader title text and parameters */
  title: {
    /** Title text */
    text: string;
    /** Font size of the title */
    size: number;
  };

  /** Loader icon size */
  iconSize: number;

  /** Optional flag indicating whether a sub-loader should be displayed */
  needSub?: boolean;
};
