import { schema, normalize } from 'normalizr';

// Define the course entity schema
const course = new schema.Entity('courses');

// Function to normalize courses data
export const coursesNormalizer = (data) => normalize(data, [course]);

export default course;
