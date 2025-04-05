import styles from '@/styles/Dashboard/Admin/SystemNotifications.module.css';

export default function SystemNotifications() {
  const notifications = [
    'Sign In [13:25:12, 20.2.2025] from Slovakia, Bratislava by next IP: 192.168.1.1',
    'Sign In [13:20:12, 20.2.2025] from Slovakia, Bratislava by next IP: 192.168.1.1',
  ];

  return (
    <div className={styles.notificationsBox}>
      <h3>System notification</h3>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
