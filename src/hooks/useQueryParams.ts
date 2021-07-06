import { useState, useEffect, useCallback } from 'react';

/**
 * This hook can be used to get the value of a specified query parameter on the URL
 * And als can be used to set a value for a specified query parameter on the URL
 * @param paramName name of the query parameter
 */
export function useQueryParams (paramName: string) {
  const [param, setParam] = useState<string|null>();

  /**
   * Get the value of the query parameter and set it in the state
   */
  const getParam = useCallback(() => {
    let urlParams = new URLSearchParams(document.location.search.substring(1));
    setParam(urlParams.get(paramName));
  }, [paramName]);

  /**
   * Set the given value for query parameter in the URL and in the state
   * @param paramValue value of the specified query parameter
   */
  const updateParam = (paramValue: string) => {
    const urlParams = new URLSearchParams(document.location.search);
    urlParams.set(paramName, paramValue);
    window.history.pushState(null, '', `${document.location.pathname}?${urlParams.toString()}`);
    setParam(paramValue);
  }

  useEffect(() => {
    getParam();

    // Listen to state changes on the URL and update the state 
    window.addEventListener('popstate', getParam);
    return () => {
      window.removeEventListener('popstate', getParam);
    };
  }, [getParam]);

  return [param, updateParam] as const;
}
