import { BASE_URL } from "./Url";
import axiosClient from "./axiosClient";

class HandleCampaign {
  getCampaign = async (url: string) => {
    return axiosClient.get(BASE_URL + url);
  };

  //   putPost = async (url: string, data: Post) => {
  //     return axiosClient.put(BASE_URL + url, data);
  //   };
}

const handleCampaign = new HandleCampaign();

export default handleCampaign;
