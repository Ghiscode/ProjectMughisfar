// src/api/BerandaService.ts

import { BerandaData } from '../types/data'; // Menggunakan interface yang sudah dibuat

// URL Endpoint dari MockAPI Anda untuk data beranda
const MOCK_API_URL = 'https://690884422d902d0651b0a754.mockapi.io/beranda';

// Kategori 6: Logika async yang bersih menggunakan fetch
export const getBerandaData = async (): Promise<BerandaData> => {
  try {
    const response = await fetch(MOCK_API_URL);

    // Kategori 6: Mengelola loading/error states (check response.ok)
    if (!response.ok) {
      throw new Error(`Gagal mengambil data: ${response.status}`);
    }

    // Mengambil data dan mem-parse JSON
    const data = await response.json();

    // Perhatian: MockAPI mengembalikan Array ([...]) untuk collection
    // Kita asumsikan kita hanya mengambil item pertama dari array tersebut.
    if (Array.isArray(data) && data.length > 0) {
      return data[0] as BerandaData; // Ambil objek pertama
    }

    throw new Error('Data API tidak valid atau kosong.');
  } catch (error) {
    console.error('Kesalahan Fetch Data Beranda:', error);
    // Melemparkan error agar bisa ditangkap oleh komponen (Kategori 6)
    throw error;
  }
};
