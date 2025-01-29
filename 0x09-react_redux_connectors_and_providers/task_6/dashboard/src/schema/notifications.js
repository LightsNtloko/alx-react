import { schema, normalize } from 'normalizr';

// Define the notification entity schema
const notification = new schema.Entity('notifications');

// Function to normalize notifications data
export const notificationsNormalizer = (data) => normalize(data, [notification]);

export default notification;
