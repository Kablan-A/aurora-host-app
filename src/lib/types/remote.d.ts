declare module 'remote/Header' {
  const Header: import('react').ComponentType;
  export default Header;
}

declare module 'remote/Form' {
  const Form: import('react').ComponentType;
  export default Form;
}

declare module 'remote/Input' {
  const Input: import('react').ComponentType<import('react').ComponentProps<"input">>;
  export default Input;
}

declare module 'remote/Catalog' {
  const Catalog: import('react').ComponentType;
  export default Catalog;
}

declare module 'remote/NotificationManager' {
  const NotificationManager: import('react').ComponentType;
  export default NotificationManager;
}

declare module 'remote/emitter' {
  import type { Emitter } from 'mitt';

  type Notification = {
    id: string;
    message: string;
    date: string;
  };

  const emitter: Emitter<Record<string, Notification>>;
  export default emitter;
}