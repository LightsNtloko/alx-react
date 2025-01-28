import * as notifications from "../../../../notifications.json";

export default function getAllNotificationsByUser(userId) {
  return notifications.default
    .filter((notification) => notification.author.id === userId)
    .map(({ guid, isRead, type, value }) => ({ guid, isRead, type, value }));
}
