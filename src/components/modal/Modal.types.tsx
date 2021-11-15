export interface ModalProps {
  show: boolean;
  onChange: (value: boolean) => void;
  children: React.ReactNode;
}
