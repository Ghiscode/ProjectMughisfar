// src/api/QuranService.ts

import { SurahData } from '../types/data'; // Menggunakan interface SurahData

// URL Endpoint dari MockAPI Anda untuk daftar surah
const MOCK_API_URL = 'https://690884422d902d0651b0a754.mockapi.io/:daftarSurat';

// Kategori 6: Mengambil Array data surah
export const getSurahList = async (): Promise<SurahData[]> => {
  try {
    const response = await fetch(MOCK_API_URL);

    // Kategori 6: Mengelola loading/error states (check response.ok)
    if (!response.ok) {
      throw new Error(`Gagal mengambil daftar surah: ${response.status}`);
    }

    // Mengambil data dan mem-parse JSON
    const data = await response.json();

    // Memastikan data adalah array dan mengembalikan array surah
    if (Array.isArray(data)) {
      return data as SurahData[];
    }

    throw new Error('Data API daftar surah tidak valid.');
  } catch (error) {
    console.error('Kesalahan Fetch Daftar Surah:', error);
    throw error;
  }
};
