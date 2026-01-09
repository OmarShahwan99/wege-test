type FetchOptions = RequestInit & {
  params?: Record<string, string | number | boolean | undefined>;
};

const BASE_URL = process.env.NEXT_APP_BASE_URL;

export async function fetcher<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { params, headers, ...rest } = options;

  const url = `${BASE_URL}${endpoint}`;

  const res = await fetch(url, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => null);
    throw {
      status: res.status,
      message: errorBody?.message || "Something went wrong",
    };
  }

  return res.json() as Promise<T>;
}
