export const REPAIR_ADD = "REPAIR_ADD";
export const REMOVE_REPAIR = "REMOVE_REPAIR";

export const repairAdd = (payload) => ({
  type: REPAIR_ADD,
  payload,
});

export const repairRemoved = (id) => ({
  type: REMOVE_REPAIR,
  payload: id,
});
