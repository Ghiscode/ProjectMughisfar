import { SurahData } from '../types/data';

const MOCK_API_URL = 'https://690884422d902d0651b0a754.mockapi.io/daftarSurat';

export const getSurahList = async (): Promise<SurahData[]> => {
  try {
    const response = await fetch(MOCK_API_URL);

    if (!response.ok) {
      throw new Error(`Gagal mengambil daftar surah: ${response.status}`);
    }

    const data = await response.json();

    if (Array.isArray(data)) {
      return data as SurahData[];
    }

    throw new Error('Data API daftar surah tidak valid.');
  } catch (error) {
    console.error('Kesalahan Fetch Daftar Surah:', error);
    throw error;
  }
};
