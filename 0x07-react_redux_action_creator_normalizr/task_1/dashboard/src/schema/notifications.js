import { normalize, schema } from "normalizr";
import * as notifications from "../../../../notifications.json";

// Define the user entity
const user = new schema.Entity("users");

// Define the message entity
const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid", // Use `guid` as the unique identifier
  }
);

// Define the notification entity
const notification = new schema.Entity("notifications", {
  author: user, // Reference the user entity
  context: message, // Reference the message entity
});

// Normalize the notifications data
const normalizedData = normalize(notifications.default, [notification]);

/**
 * Function to get all notifications by user ID
 * @param {string} userId - The user ID
 * @returns {Array} - List of notifications for the user
 */
export default function getAllNotificationsByUser(userId) {
  const notificationsForUser = normalizedData.result.filter(
    (id) => normalizedData.entities.notifications[id].author === userId
  );

  return notificationsForUser.map((id) => {
    const { guid, isRead, type, value } = normalizedData.entities.messages[
      normalizedData.entities.notifications[id].context
    ];
    return { guid, isRead, type, value };
  });
}

export { normalizedData, user, message, notification };
