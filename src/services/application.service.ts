import { api } from './api';
import type {Application, ApplicationField} from '../types';

interface CreateApplicationData {
  institutionId: string;
  submittedData: Record<string, string | number | boolean | string[]>;
  documents: File[];
}

export const applicationService = {
  async getMyApplications(): Promise<Application[]> {
    const response = await api.get<Application[]>('/applications/my');
    return response.data;
  },

  async getById(id: string): Promise<Application> {
    const response = await api.get<Application>(`/applications/${id}`);
    return response.data;
  },

  async create(data: CreateApplicationData): Promise<Application> {
    const formData = new FormData();
    formData.append('institutionId', data.institutionId);
    formData.append('submittedData', JSON.stringify(data.submittedData));

    data.documents.forEach((file) => {
      formData.append('documents', file);
    });

    const response = await api.post<Application>('/applications', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  async updateStatus(id: string, status: string): Promise<Application> {
    const response = await api.patch<Application>(`/applications/${id}/status`, { status });
    return response.data;
  },

  async getApplicationFields(institutionId: string): Promise<ApplicationField[]> {
    const response = await api.get<ApplicationField[]>(`/institutions/${institutionId}/application-fields`);
    return response.data;
  },
};
