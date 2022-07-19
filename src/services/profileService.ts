import api from "./Api";

const findAllProfiles = {
  allProfiles: () =>
    api
      .get("/profile")
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log(error)),
};

const findProfileById = {
  profileById: (profileId: string) =>
    api
      .get(`/profile/${profileId}`)
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log(error)),
};
export { findAllProfiles, findProfileById};
