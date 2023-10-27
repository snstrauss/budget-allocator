import React, { createContext, useMemo, useReducer } from 'react';
/**
 *
 * helper to create react context with actions that change state.
 *
 * usage -
 *
 * const { Provider, Context } = createActionsContext(methods, initialState);
 *
 * initialState
 * ------------
 * an arbitrary object containing the state we want to keep in this context
 *
 * methods
 * -------
 * an object with actions that will mutate the state:
 *
 * const methods = {
 *  actionName: (state, data) => {
 *    return newState;
 *  },
 *  anotherActionName: (state, data) => {
 *    return anotherNewState;
 *  }
 * }
 *
 * using the context in a component will provide with the state and actions
 *
 */
export function createActionsContext(methods, initialState) {
  const Context = createContext();

  function reducer(currState, { type, data }) {
    return type in methods ? methods[type](currState, data) : currState;
  }

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const actions = useMemo(() => methodsToActions(methods, dispatch), []);

    return <Context.Provider value={{ state, actions }}>{children}</Context.Provider>;
  };

  return {
    Provider,
    Context
  };
}

function methodsToActions(methods, dispatch) {
  return Object.keys(methods).reduce((allActions, methodName) => {
    allActions[methodName] = (data) => {
      dispatch({
        type: methodName,
        data
      });
    };

    return allActions;
  }, {});
}
