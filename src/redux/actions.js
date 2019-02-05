import { USER_DAMAGE, USER_HEAL } from "./actionTypes";

export const damageUser = damage => ({
  type: USER_DAMAGE,
  payload: {
    damage
  }
});

export const healUser = healing => ({
  type: USER_HEAL,
  payload: {
    healing
  }
});
