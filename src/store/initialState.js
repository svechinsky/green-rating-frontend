import ApiService from "../services/api/ApiService";

export default {
  app: {
    isInitialized: false,
    user: null,
    notification: { open: false },
    entities: [],
    newSigned: null,
    baseUrl: "https://0.0.0.0:5000/api/v1",
    api: ApiService
  }
};
