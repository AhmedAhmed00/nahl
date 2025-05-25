import { api, CITIES } from "../data/api";

/**
 * Generic API request handler
 * @param {string} method - HTTP method (get, post, delete, patch)
 * @param {string} url - API endpoint
 * @param {object} [data=null] - Request body (optional)
 * @returns {Promise<any>}
 */

export async function apiRequest(method, url, data = null) {
  console.log(data, "data in apiRequest");
  try {
    const res = await api[method](url, data);
    return res.data;
  } catch (error) {
    console.error(`Error in ${method.toUpperCase()} ${url}:`, error);
    throw error.response || new Error("Unknown error occurred");
  }
}

// 🏢 Client Services
export const citiesServices = {
  getAll: (params) => apiRequest("get", CITIES, { params }),
  getById: (id) => apiRequest("get", `${CITIES}${id}/`),
  create: (body) => apiRequest("post", CITIES, body),
  update: (id, body) => apiRequest("patch", `${CITIES}${id}/`, body),
  delete: (id) => apiRequest("delete", `${CITIES}${id}/`),
  getInfinite: async ({ page = 1, search = "" }) => {
    const params = { page, search };
    const response = await apiRequest("get", CITIES, { params });
    return {
      data: response.results,
      nextPage: response.next ? page + 1 : undefined,
      total: response.count,
    };
  },
};
