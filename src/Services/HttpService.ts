import type { AxiosRequestConfig } from "axios";
import apiClient from "./ApiClient";

interface Entity {
  id: number;
}

export interface FetchResponse<T> {
  count: number;
  next: string | undefined;
  results: T[];
}

class HttpService<T> {
  #endpoint = "";
  constructor(endpoint: string) {
    this.#endpoint = endpoint;
  }

  GetAll = (requestConfig?: AxiosRequestConfig) => {
    return apiClient
      .get<FetchResponse<T>>(this.#endpoint, {
        ...requestConfig,
      })
      .then((res) => res.data);
  };

  DeleteUser = (entityId: number) => {
    return apiClient.delete(this.#endpoint + "/" + entityId);
  };

  Add = (newEntity: T) => {
    return apiClient.post(this.#endpoint, newEntity);
  };

  Update = <T extends Entity>(updatedEntity: T) => {
    return apiClient.patch(
      this.#endpoint + "/" + updatedEntity.id,
      updatedEntity,
    );
  };
}

const Create = <T>(endpoint: string) => new HttpService<T>(endpoint);
export default Create;
