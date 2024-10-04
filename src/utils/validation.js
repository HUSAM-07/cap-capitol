import * as Yup from 'yup';

export const financialDataSchema = Yup.object().shape({
  revenue: Yup.number().positive('Revenue must be positive').required('Revenue is required'),
  expenses: Yup.number().positive('Expenses must be positive').required('Expenses are required'),
  profit: Yup.number().required('Profit is required'),
  date: Yup.date().required('Date is required'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});