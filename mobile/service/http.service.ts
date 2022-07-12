import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../config';
import { ITodo, ItoDoWithoutId, IUser } from '../types/types';
import { retrieveToken } from './helper';
export class HttpService {
  fetchingService: AxiosInstance;
  fetchingServiceWithHeaders: AxiosInstance;
  baseUrl: string;

  constructor(baseUrl = config.baseUrl) {
    this.fetchingService = axios;
    this.fetchingServiceWithHeaders = this.authAxios;
    this.baseUrl = baseUrl;
  }

  authAxios = axios.create({
    headers: { token: async () => await AsyncStorage.getItem('token') },
  });

  private getFullApiUrl(specificApiRoute: string) {
    return `${this.baseUrl}${specificApiRoute}`;
  }

  async get(apiVersion: string): Promise<ITodo[]> {
    const res = await this.fetchingServiceWithHeaders.get(
      this.getFullApiUrl(apiVersion),
    );
    return res.data;
  }
  async getOneTodo(apiVersion: string, id: string) {
    const res = await this.fetchingServiceWithHeaders.get(
      this.getFullApiUrl(apiVersion) + `/${id}`,
    );
    return res.data;
  }

  async post(data: ItoDoWithoutId, apiVersion: string) {
    console.log(retrieveToken);

    const res = await this.fetchingServiceWithHeaders.post(
      this.getFullApiUrl(apiVersion),
      data,
    );
    return res.data;
  }

  async put(data: Partial<ItoDoWithoutId>, id: string, apiVersion: string) {
    const res = await this.fetchingServiceWithHeaders.put(
      this.getFullApiUrl(apiVersion) + `/${id}`,
      data,
    );
    return res.data;
  }

  async delete(id: string, apiVersion: string) {
    const res = await this.fetchingServiceWithHeaders.delete(
      this.getFullApiUrl(apiVersion) + `/${id}`,
    );
    return res.data;
  }

  async login(apiVersion: string, user: IUser) {
    return await this.fetchingServiceWithHeaders.post(
      this.getFullApiUrl(apiVersion),
      user,
    );
  }
  async register(apiVersion: string, user: IUser) {
    return await this.fetchingServiceWithHeaders.post(
      this.getFullApiUrl(apiVersion),
      user,
    );
  }
}

export default HttpService;
