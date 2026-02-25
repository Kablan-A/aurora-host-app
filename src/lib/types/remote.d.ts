import * as React from 'react';

declare module 'remote/Header' {
  const Header: React.ComponentType;
  export default Header;
}

declare module 'remote/Form' {
  const Form: React.ComponentType;
  export default Form;
}

declare module 'remote/Input' {
  const Input: React.ComponentType<React.ComponentProps<"input">>;
  export default Input;
}

declare module 'remote/Catalog' {
  const Catalog: React.ComponentType;
  export default Catalog;
}

declare module 'remote/NotificationManager' {
  const NotificationManager: React.ComponentType;
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