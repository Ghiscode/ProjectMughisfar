import { UserData } from '../types/data';

const MOCK_API_URL = 'https://690884422d902d0651b0a754.mockapi.io';

export const loginUser = async (
  email: string,
  password: string,
): Promise<UserData> => {
  try {
    const response = await fetch(`${MOCK_API_URL}/Akun?email=${email}`);
    if (!response.ok) {
      throw new Error('Server MockAPI tidak merespons.');
    }
    const users: UserData[] = await response.json();
    // Cek User
    if (users.length === 0) {
      throw new Error('Email tidak terdaftar.');
    }
    const user = users[0]; // Ambil user pertama yang cocok
    // Cek password
    if (user.password !== password) {
      throw new Error('Password salah.');
    }

    return user;
  } catch (error) {
    throw error;
  }
};
