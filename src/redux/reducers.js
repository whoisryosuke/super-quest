import { USER_DAMAGE, USER_HEAL } from "./actionTypes";

const initialState = {
  user: {
    health: 1000
  }
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_DAMAGE:
      const { damage } = action.payload;
      const currentHealth = state.user.health - damage;
      if (currentHealth < 0) {
        return {
          ...state,
          user: {
            ...state.user,
            health: 0
          }
        };
      }
      return {
        ...state,
        user: {
          ...state.user,
          health: currentHealth
        }
      };

    case USER_HEAL:
      const { healing } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          health: state.user.health + healing
        }
      };

    default:
      return state;
  }
};

export default reducers;
