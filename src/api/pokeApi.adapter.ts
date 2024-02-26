import axios from "axios";

export type Adapter = {
  get<T>(url: string): Promise<T>;
  post(url: string, payload: any): Promise<void>;
  patch(url: string, payload: any): Promise<void>;
  delete(url: string): Promise<void>;
};

export class FetchPokeApiAdapter implements Adapter {
  async get<T>(url: string) {
    const response = await fetch(url);
    const data: T = await response.json();
    return data;
  }

  async post(url: string, payload: any) {
    return;
  }
  async patch(url: string, payload: any) {
    return;
  }

  async delete(url: string) {
    return;
  }
}

export class PokeApiAdapter implements Adapter {
  private readonly axios = axios;
  async get<T>(url: string) {
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  async post(url: string, payload: any) {
    return;
  }

  async patch(url: string, payload: any) {
    return;
  }

  async delete(url: string) {
    return;
  }
}
