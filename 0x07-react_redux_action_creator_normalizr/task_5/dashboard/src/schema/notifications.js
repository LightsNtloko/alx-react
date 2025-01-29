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
  return normalizedData.result.reduce((acc, id) => {
    const notification = normalizedData.entities.notifications[id];
    if (notification.author === userId) {
      const message = normalizedData.entities.messages[notification.context];
      acc.push({
        guid: message.guid,
        isRead: message.isRead,
        type: message.type,
        value: message.value,
      });
    }
    return acc;
  }, []);
}

// Export the normalized data and schemas
export { normalizedData, user, message, notification };
