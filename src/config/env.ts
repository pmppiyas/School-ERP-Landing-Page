export const env = {
  frontendUrl:
    process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000',

  admin: {
    email: process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@gmail.com',
    password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'Admin1234',
  },

  teacher: {
    email: process.env.NEXT_PUBLIC_TEACHER_EMAIL || 'teacher@gmail.com',
    password: process.env.NEXT_PUBLIC_TEACHER_PASSWORD || 'Teacher1234',
  },

  student: {
    email: process.env.NEXT_PUBLIC_STUDENT_EMAIL || 'fatemapg@gmail.com',
    password: process.env.NEXT_PUBLIC_STUDENT_PASSWORD || '123456',
  },
};

export const envConfig = env;
export default env;
