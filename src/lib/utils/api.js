// Dependencies
import queryString from 'query-string';

// Config
import config from '../../config';



export function apiFetch2(endpoint, options = {}, query = false) {
  let qs;

  if (query) {
    qs = queryString.stringify(query);
  }

    try {
      const fetchEndpoint = apiEndpoint(endpoint, qs);
      fetch(fetchEndpoint)
        .then((response) => {
          var r = response.json();
          return r;
        })
    } catch (e) {
      throw e;
    }
}



export function apiFetch(endpoint, options = {}, query = false) {
  let qs;

  if (query) {
    qs = queryString.stringify(query);
  }

  const getPromise = async () => {
    try {
      const fetchOptions = apiOptions(options);
      const fetchEndpoint = apiEndpoint(endpoint, qs);
      const response = await fetch(fetchEndpoint, fetchOptions);
      return response.json();
    } catch (e) {
      throw e;
    }
  };

  return getPromise();
}

export function apiEndpoint(endpoint, qs) {
  let query = '';

  if (qs) {
    query = `?${qs}`;
  }

  return `${config.apiUrl}${config.api.url}${endpoint}${query}`;
}

export function apiOptions(options = {}) {
  const {
    method = 'GET',
    headers = {
      'Content-Type': 'application/json'
    },
    body = true
  } = options;

  const newOptions = {
    method,
    headers
    //credentials: 'include'
  };

  if (body) {
    newOptions.body = body;
  }

  return newOptions;
}
