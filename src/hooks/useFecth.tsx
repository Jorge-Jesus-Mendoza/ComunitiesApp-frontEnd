import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import communityApi from '../api/communityApi';

function useFetch(
  url,
  method = 'get',
  body = null,
  headers = null,
  params = null,
  data = null,
  shouldAbort = false,
  timeoutAbort = 5000
) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const abortController = new AbortController();

  const fetchData = async (
    newURL = url,
    newMethod = method,
    newBody = body,
    newHeaders = headers,
    newParams = params,
    newData = data,
    newShouldAbort = shouldAbort,
    newTimeout = timeoutAbort
  ) => {
    setLoading(true);
    if (newShouldAbort) {
      abortController.abort();
    }
    const timer = setTimeout(() => abortController.abort(), newTimeout);
    return communityApi.request({
      url: newURL,
      method: newMethod,
      headers: newHeaders,
      body: newBody,
      params: newParams,
      data: newData,
      signal: abortController.signal,
    })
      .then((res) => {
        clearTimeout(timer);
        setResponse(res.data);
        return res;
      })
      .catch((err) => {
        setError(err);
        return err;
      })
      .finally(() => setLoading(false));
  };

  // aquí se aborta la petición cuando cambian las dependencias o se desmonta el componente
  useEffect(() => {
    fetchData();

    return () => abortController.abort();
  }, [method, url, body, headers, data, shouldAbort, timeoutAbort]);

  return { response, error, loading, fetchData };
}
useFetch.defaultProps = {
  method: 'get',
  body: null,
  headers: null,
  params: null,
  data: null,
  shouldAbort: false,
  timeoutAbort: 3500,
};

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string,
  body: PropTypes.object,
  headers: PropTypes.object,
  params: PropTypes.object,
  data: PropTypes.object,
  shouldAbort: PropTypes.bool,
  timeoutAbort: PropTypes.number,
};

export default useFetch;
