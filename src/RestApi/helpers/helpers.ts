import { TObj } from "@/types";
import { EndpointProps } from "../Endpoint/Endpoint";

export const handleError = async (res: Response) => {
  if (!res.ok) {
    let body: Record<string, unknown>;
    
    try {
      body = await res.json() as typeof body;
    } catch {
      throw res;
    }
    throw body ? body : res;
  }

  return res;
};

export const handleJson = async (res: Response) => {
  let response;
  try {
    response = await res.json();
  } catch {
    response = {};
  }
  return response;
};

export const replaceUrlParams = (url: string, params: EndpointProps['urlParams']) => {
  if (!url) return '';
  const fulllUrl =
    typeof params === 'object'
      ? Object.entries(params).reduce((acc, [key, value]) => {
        return acc.replace(
            `:${key}`,
            value === undefined ? '' : (value as string)
        );
      }, url)
      : url;

  return fulllUrl.replace(/\/:[^/]+/g, '');
};

const isEmptyObject = (obj?: Record<string, unknown>) => {
  return !!obj && Object.keys(obj).length === 0;
};

export const buildUrl = (
  url: string,
  urlParams?: EndpointProps['urlParams'],
  baseUrl?: string
) => {
  const urlWithBase = baseUrl ? `${baseUrl}${url}` : url;

  /// Replace params inside the url
  const fullUrl = replaceUrlParams(urlWithBase, urlParams);

  /// Build the url object
  let urlObj: URL;
  try {
    urlObj = new URL(fullUrl);
  } catch {
    urlObj = new URL(fullUrl, window.location.origin);
  }

  if (!isEmptyObject(urlParams)) {
    const params = getUrlParamsNotUse(urlWithBase, urlParams);
    const searchParams = new URLSearchParams(params as TObj<string>);
    urlObj.search = searchParams.toString();
  }

  return urlObj.toString();
};

const getUrlParamsNotUse = (url: string, urlParams?: EndpointProps['urlParams']) => {
  const innerParams: EndpointProps['urlParams'] = urlParams ?? {};

  return Object.entries(innerParams).reduce<typeof innerParams>((acc, [key, value]) => {
      if (!url.includes(`:${key}`)) {
        acc[key] = value;
      }

      return acc;
    }, {});
};
