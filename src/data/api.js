import axios from "axios";
import Lessons from "../pages/lessons/Lessons";

const BASEURL = "https://studentapp.pythonanywhere.com/en/";

export const api = axios.create({ baseURL: BASEURL });

api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    const lang = localStorage.getItem("lang");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    if (lang) {
      config.headers["Accept-Language"] = lang;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let refreshRequest = null;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!refreshRequest) {
        refreshRequest = refreshToken();
      }

      try {
        const newAccessToken = await refreshRequest;
        refreshRequest = null;
        localStorage.setItem("accessToken", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axios(originalRequest);
      } catch (refreshError) {
        refreshRequest = null;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/auth";
        return Promise.reject(refreshError);
      }
    }
    if (error.response?.status === 403) {
      window.location.href = "/unauthorized";
    }

    return Promise.reject(error);
  }
);

async function refreshToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) throw new Error("No refresh token available");

  const response = await axios.post(`${BASEURL}/core/refresh`, {
    refreshToken,
  });
  return response.data.accessToken;
}

// services/genericService.js

/**
 * Creates a generic service with CRUD operations
 * @param {string} baseUrl - The base API endpoint for the resource
 * @returns {object} - Object containing CRUD methods
 */

export function createService(baseUrl) {
  return {
    baseUrl,
    getAll: (params) => apiRequest("get", baseUrl, { params }),
    getById: (id) => apiRequest("get", `${baseUrl}${id}/`),
    create: (body) => apiRequest("post", baseUrl, body),
    update: (id, body) => apiRequest("patch", `${baseUrl}${id}/`, body),
    delete: (id) => apiRequest("delete", `${baseUrl}${id}/`),
    getInfinite: async ({ page = 1, search = "" }) => {
      const params = { page, search };
      const response = await apiRequest("get", baseUrl, { params });
      return {
        data: response.results,
        nextPage: response.next ? page + 1 : undefined,
        total: response.count,
      };
    },
  };
}

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

// API Endpoints
export const VERFICATOIN = `/core/verify-verification-code/`;
export const SUBJECTS = `/lessons/subjects/`;
export const LESSONS = `/lessons/lessons/`;
export const VIDEOS = `/lessons/videos/`;
export const PAST_EXAMS = `/lessons/past-exams/`;
export const Summaries = `/lessons/summaries/`;
export const INTERACTIVE_QUESTIONS = `/lessons/interactive-questions/`;

export const verficationServices = createService(VERFICATOIN);
export const subjectsServices = createService(SUBJECTS);
export const lessonsServices = createService(LESSONS);
export const videosServices = createService(VIDEOS);
export const pastExamsServices = createService(PAST_EXAMS);
export const summariesServices = createService(Summaries);
export const interactiveQuestionsServices = createService(
  INTERACTIVE_QUESTIONS
);

export default BASEURL;
