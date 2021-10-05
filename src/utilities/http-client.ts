const defaultHeaders: HeadersInit = {
  'Content-Type': 'application/json'
};

export function get(url: string, headers?: HeadersInit): Promise<Response> {
  return fetch(url, {
    method: 'GET',
    headers: { ...defaultHeaders, ...(headers ?? {}) }
  });
}

export function remove(url: string, headers?: HeadersInit): Promise<Response> {
  return fetch(url, {
    method: 'DELETE',
    headers: { ...defaultHeaders, ...(headers ?? {}) }
  });
}

export function post<T>(url: string, body: T, headers?: HeadersInit): Promise<Response> {
  return fetch(url, {
    method: 'POST',
    headers: { ...defaultHeaders, ...(headers ?? {}) },
    body: JSON.stringify(body)
  });
}

export function put<T>(url: string, body: T, headers?: HeadersInit): Promise<Response> {
  return fetch(url, {
    method: 'PUT',
    headers: { ...defaultHeaders, ...(headers ?? {}) },
    body: JSON.stringify(body)
  });
}
