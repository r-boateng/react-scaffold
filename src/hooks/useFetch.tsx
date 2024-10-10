import { useEffect, useState } from "react";

interface BaseProps {
  url: string,
}

type GetProps = {
  method: "GET" | "HEAD",
  data?: never
}
type PostProps = {
  method: "POST" | "DELETE" | "PUT",
  data?: object
}

type ConditionalProps = GetProps | PostProps;
type Props = BaseProps & ConditionalProps


function useFetch({ url, method, data }: Props) {
  const [result, setResult] = useState<object>();
  const [loading, setLoading] = useState(false);
  const [statusCode, setCode] = useState(-1);

  const fetchData = async () => {
    if (loading) return;

    setLoading(true);

    const headers = data === undefined
      ? {}
      : new Headers({ "Content-type": "application/json", Accept: "application/json" });


    const body = JSON.stringify(data ?? {}, null, 2);

    const response = await fetch(url, {
      headers,
      body,
      method
    })

    setCode(response.status);

    try {
      const text = await response.text();
      const data = JSON.parse(text);
      setResult(data);
    } catch (err) {
      setResult({});
    }

    setLoading(false);

  }

  useEffect(() => {
    if (!url) return;
    if (["PUT", "POST", "DELETE"].includes(method) && !data) return;

    fetchData();
  }, [url, data])

  const retry = () => fetchData();

  return { result, loading, statusCode, retry }
}


function useGet({ url }: BaseProps) {
  return useFetch({ url, method: "GET" })
}

function usePost({ url, data }: BaseProps & PostProps) {
  return useFetch({ url, data, method: "POST" })
}

export { useGet, usePost };

