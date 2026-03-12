import type { Response } from 'express';

/**
 * 成功：单个对象
 */
export function resOkObj(res: Response, obj: any, status: number = 200) {
  return res.status(status).json({
    isOK: true,
    message: null,
    data: { obj },
  });
}

/**
 * 成功：列表（增加可选 total 参数）
 * usage: resOkList(res, list) 或 resOkList2(res, list, total)
 */
export function resOkList(res: Response, list: any[], total: number, status: number = 200) {
  const data: any = { list };
  data.total = total;

  return res.status(status).json({
    isOK: true,
    message: null,
    data,
  });
}

/**
 * 4xx 错误：单个对象返回格式
 */
export function res400Obj(res: Response, message: string | null = 'bad request', status: number = 400) {
  return res.status(status).json({
    isOK: false,
    message,
    data: { obj: null },
  });
}

/**
 * 4xx 错误：列表返回格式（可带 total）
 */
export function res400List(
  res: Response,
  message: string | null = 'bad request',
  status: number = 400,
  total: number = 0,
) {
  return res.status(status).json({
    isOK: false,
    message,
    data: { list: [], total },
  });
}

/**
 * 5xx 错误：单个对象返回
 * err 可以是 Error 或 string
 */
export function res500Obj(res: Response, err: any = null, status: number = 500) {
  const message = typeof err === 'string' ? err : (err?.message ?? 'internal error');
  return res.status(status).json({
    isOK: false,
    message,
    data: { obj: null },
  });
}

/**
 * 5xx 错误：列表返回（可带 total）
 */
export function res500List(res: Response, err: any = null, status: number = 500, total: number = 0) {
  const message = typeof err === 'string' ? err : (err?.message ?? 'internal error');
  return res.status(status).json({
    isOK: false,
    message,
    data: { list: [], total },
  });
}

/**
 * 将 req.query[xx] 的值解析成 string[]：
 * 支持： undefined | string | string[] ，并支持逗号分隔的单字符串值
 */
export function parseQueryArray(val: any): string[] {
  if (val === undefined || val === null) return [];

  if (Array.isArray(val)) {
    return val.flatMap((v) =>
      String(v)
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
    );
  }

  return String(val)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * 在 parseQueryArray 的基础上把元素转换为 number 并过滤掉非数字值
 */
export function parseQueryIntArray(val: any): number[] {
  return parseQueryArray(val)
    .map((s) => {
      const n = Number(s);
      return Number.isNaN(n) ? null : n;
    })
    .filter((n): n is number => n !== null);
}

/**
 *  解析的参数如果返回number类型一定是符合预期的数字，否则一律返回null
 *
 */
export function parseQueryInt(val: any): number | null {
  if (val === undefined || val === null) {
    return null;
  }
  const v = Array.isArray(val) ? val[0] : val;
  //
  const s: string = String(v).trim();
  if (s === '') {
    return null;
  }
  //
  const n: number = Number(s);
  if (Number.isNaN(n) || !isFinite(n)) {
    return null;
  }
  //
  return Math.floor(n);
}

export function parseQueryBool(val: any): boolean | null {
  if (val === undefined || val === null) {
    return null;
  }

  if (typeof val === 'boolean') {
    return val;
  }

  const v = Array.isArray(val) ? val[0] : val;
  const s: string = String(v).trim().toLowerCase();
  if (s === 'true') {
    return true;
  } else if (s === 'false') {
    return false;
  } else {
    return null;
  }
}

export function parseQueryIsNull(val: any): boolean {
  return val === null;
}
/**
 * 解析需要使用string表的的数字参数，如果返回string类型，就一定是合法的数字字符串，否则一律返回null
 * @param val
 */
export function parseQueryNumStr(val: any): string | null {
  if (val === undefined || val === null) {
    return null;
  }

  const s: string = String(val).trim();
  if (s === '') {
    return null;
  }

  const n: number = Number(s);
  if (Number.isNaN(n) || !isFinite(n)) {
    return null;
  }

  return s;
}

/**
 * 返回分页参数 limit 和 offset，如果输入的参数不合法或未指定，则根据默认之返回合适的分页参数
 */
export function parsePageInfo(q: any): { limit: number; offset: number } {
  const rawLimit = q?.limit;
  const rawOffset = q?.offset;

  let limit = 100;
  let offset = 0;

  if (rawLimit !== undefined && rawLimit !== null && rawLimit !== '') {
    const n = Number(rawLimit);
    if (!Number.isNaN(n) && isFinite(n)) {
      const ln = Math.floor(n);
      if (ln > 0) limit = ln;
    }
  }

  if (rawOffset !== undefined && rawOffset !== null && rawOffset !== '') {
    const m = Number(rawOffset);
    if (!Number.isNaN(m) && isFinite(m)) {
      const off = Math.floor(m);
      if (off >= 0) offset = off;
    }
  }

  return { limit, offset };
}

/**
 * 检查 POST 请求体中是否包含指定字段
 * @param body
 * @param fields
 */
export function checkPostBodyFields(body: any, fields: string[]): boolean {
  if (!body) {
    return false;
  }

  for (const field of fields) {
    if (!(field in body)) {
      return false;
    }
  }

  return true;
}

/**
 * 解析枚举字符串参数，返回的值要么是枚举值之一，要么是 null
 * @param val
 * @param enums
 */
export function parseEnumString<T extends string>(val: any, enums: T[]): T | null {
  if (typeof val !== 'string') {
    return null;
  }

  if (enums.includes(val as T)) {
    return val as T;
  }

  return null;
}

export function parseQueryString(val: any, checker?: (v: string) => boolean): string | null {
  if (val === undefined || val === null) {
    return null;
  }
  const v = Array.isArray(val) ? val[0] : val;
  const s: string = String(v).trim();
  if (s === '') {
    return null;
  }

  if (checker && !checker(s)) {
    return null;
  }

  return s;
}
