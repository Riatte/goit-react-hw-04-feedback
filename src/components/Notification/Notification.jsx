import { NotificationStyled } from './NotificationStyled';

export const Notification = ({ message }) => (
  <NotificationStyled>
    <p>{message}</p>
  </NotificationStyled>
);
