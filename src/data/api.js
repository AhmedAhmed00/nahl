import axios from "axios";
import { apiRequest } from "../services/apiCities";

const BASEURL = "https://shetak-v2.cyparta.com";

export const api = axios.create({ baseURL: BASEURL });

// api.defaults.headers.common["Content-Type"] = "application/json";

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
        window.location.href = "/login";
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

// API Endpoints
export const CITIES = `/core/cities/`;
export const REGIONS = `/core/regions/`;
export const SPECIALIZATIONS = `/core/specializations/`;
export const SUP_SPECIALIZATIONS = `/core/sub-specializations/`;
export const INSTITUTION = `/core/institution/`;
export const ADS = `/core/ads/`;
export const BRANCHES = `/core/management-branches/`;
export const CUSTOMER_SUPPORTS = `/core/customer-support/`;
export const EMPLOYEES = `/employee/employees/`;
export const JOB_ROLES = `/employee/job-roles/`;
export const PERMESSOINS = `/employee/permissions/`;
export const PRESCRIPTIONS = `/core/prescriptions/`;

// providers
export const DOCTORS = `/core/doctors/`;
export const THERAPY = `/core/therapy/`;
export const SCAN = `/core/scans/`;

export const CATEGORIES = `/service/categories/`;
export const SERVICES = `/service/services/`;
export const LAB = `/core/labs/`;
export const HOSPITAL = `/core/hospital/`;
export const PROVIDER_BRANCHES = `/core/provider-branches/by-provider/`;
export const PROVIDER_BRANCHES_UD = `/core/provider-branches/`;
export const PROVIDER_SERVICES = `/service/provider/`;
export const ORDERS = `/core/orders/pending-accepted-orders/`;
export const FINANCE = `/core/orders/pending-accepted-orders/?status=accepted`;
/* Services */
export const specializationServices = createService(SPECIALIZATIONS);
export const branchesServices = createService(BRANCHES);
export const adServics = createService(ADS);
export const prescriptionServices = createService(PRESCRIPTIONS);
export const permissionsService = createService(PERMESSOINS);
export const customerSupportsServices = createService(CUSTOMER_SUPPORTS);
export const doctorServices = createService(DOCTORS);
export const categoriesServices = createService(CATEGORIES);
export const servicesServices = createService(SERVICES);
export const labServices = createService(LAB);
export const hospitalServices = createService(HOSPITAL);
export const providerBranchesServices = createService(PROVIDER_BRANCHES);
export const providerBranchesServicesUD = createService(PROVIDER_BRANCHES_UD);
export const therapyServices = createService(THERAPY);
export const scanServices = createService(SCAN);
export const ordersServices = createService(ORDERS);
export const financeByOrdersServices = createService(FINANCE);

// export const providerServicesServices = createService(PROVIDER_SERVICES);

servicesServices.getInfForDoc = async ({ page = 1, search = "" }) => {
  const params = { page, search };
  params.service_type = "clinic";
  const response = await apiRequest("get", SERVICES, { params });
  return {
    data: response.results,
    nextPage: response.next ? page + 1 : undefined,
    total: response.count,
  };
};

export default BASEURL;
