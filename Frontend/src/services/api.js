import axios from "axios";

const API_URL = "https://retail-sales-dashboard-bhpd.onrender.com/api/sales";

export default {
  getSales: async (params = {}) => {
    const res = await axios.get(API_URL, {
      params: {
        page: 1,
        ...params
      }
    });
    return res.data;
  }
};
