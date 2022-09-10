export const repairAdd = (payload) => ({
  type: "repairAdded",
  payload,
});

export const repairRemoved = (id) => ({
  type: "repairRemoved",
  payload: id,
});
