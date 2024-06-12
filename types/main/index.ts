export interface ReduxActionParams {
  payload: any;
  type: string;
}
export interface AlertProps {
  message: string;
  open: boolean;
  onClose: () => void;
  type: 'error' | 'info' | 'success' | 'warning'
}