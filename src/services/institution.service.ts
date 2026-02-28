import { api } from './api';
import { Institution } from '../types';

interface InstitutionSearchParams {
  city?: string;
  state?: string;
  search?: string;
  page?: number;
  limit?: number;
}

interface InstitutionSearchResponse {
  institutions: Institution[];
  total: number;
  page: number;
  totalPages: number;
}

export const institutionService = {
  async search(params: InstitutionSearchParams): Promise<InstitutionSearchResponse> {
    const response = await api.get<InstitutionSearchResponse>('/institutions', { params });
    return response.data;
  },

  async getById(id: string): Promise<Institution> {
    const response = await api.get<Institution>(`/institutions/${id}`);
    return response.data;
  },

  async create(data: Partial<Institution>): Promise<Institution> {
    const response = await api.post<Institution>('/institutions', data);
    return response.data;
  },

  async update(id: string, data: Partial<Institution>): Promise<Institution> {
    const response = await api.put<Institution>(`/institutions/${id}`, data);
    return response.data;
  },

  async uploadPhoto(id: string, file: File): Promise<{ url: string }> {
    const formData = new FormData();
    formData.append('photo', file);
    const response = await api.post<{ url: string }>(`/institutions/${id}/photos`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  async deletePhoto(id: string, photoUrl: string): Promise<void> {
    await api.delete(`/institutions/${id}/photos`, { data: { photoUrl } });
  },
};
