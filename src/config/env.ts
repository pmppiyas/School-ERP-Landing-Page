export const env = {
  frontendUrl: process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000',

  admin: {
    email: process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@gmail.com',
    password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123',
  },

  teacher: {
    email: process.env.NEXT_PUBLIC_TEACHER_EMAIL || 'teacher@gmail.com',
    password: process.env.NEXT_PUBLIC_TEACHER_PASSWORD || 'teacher123',
  },

  student: {
    email: process.env.NEXT_PUBLIC_STUDENT_EMAIL || 'student@gmail.com',
    password: process.env.NEXT_PUBLIC_STUDENT_PASSWORD || 'student123',
  },
};

export const envConfig = env;
export default env;
