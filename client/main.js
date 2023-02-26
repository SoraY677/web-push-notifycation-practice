import "./style.css";

// arrow notification
const arrowPushNotificationButton = document.getElementById(
  "arrowPushNotificationButton"
);
arrowPushNotificationButton?.addEventListener("click", () => {
  Notification.requestPermission().then((permission) => {
    alert(permission);
  });
});

// send notification
const sendPushNotificationButton = document.getElementById(
  "sendPushNotificationButton"
);
sendPushNotificationButton.addEventListener("click", () => {
  new Notification("Hello :-) Can you see this message ??");
});
