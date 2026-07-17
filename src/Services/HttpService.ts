import apiClient, { CanceledError } from "./ApiClient";

interface Entity {
  id: number;
}

interface FetchResponse<T> {
  count: number;
  results: T[];
}

class HttpService {
  #endpoint = "";
  constructor(endpoint: string) {
    this.#endpoint = endpoint;
  }

  GetAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<FetchResponse<T>>(this.#endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  DeleteUser(entityId: number) {
    return apiClient.delete(this.#endpoint + "/" + entityId);
  }

  Add<T>(newEntity: T) {
    return apiClient.post(this.#endpoint, newEntity);
  }

  Update<T extends Entity>(updatedEntity: T) {
    return apiClient.patch(
      this.#endpoint + "/" + updatedEntity.id,
      updatedEntity,
    );
  }
}

const Create = (endpoint: string) => new HttpService(endpoint);
export default Create;
