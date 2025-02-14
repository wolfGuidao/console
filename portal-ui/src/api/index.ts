import { Api, HttpResponse, Error, FullRequestParams } from "./consoleApi";

export let api = new Api();
api.baseUrl = `${new URL(document.baseURI).pathname}api/v1`;
const internalRequestFunc = api.request;
api.request = async <T = any, E = any>({
  body,
  secure,
  path,
  type,
  query,
  format,
  baseUrl,
  cancelToken,
  ...params
}: FullRequestParams): Promise<HttpResponse<T, E>> => {
  const internalResp = internalRequestFunc({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params,
  });
  return internalResp.then(CommonAPIValidation);
};

export function CommonAPIValidation<D, E>(
  res: HttpResponse<D, E>
): HttpResponse<D, E> {
  const err = res.error as Error;
  if (err && err.code === 403 && err.message === "invalid session") {
    document.location = "/";
  }
  return res;
}
