import "./style.css";

// arrow notification
const arrowPushNotificationButton = document.getElementById(
  "arrowPushNotificationButton"
);
arrowPushNotificationButton?.addEventListener("click", () => {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
  });
});
