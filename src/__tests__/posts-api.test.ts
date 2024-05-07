import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';

const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

describe('Request Posts API', () => {
  let response: Response;
  let body: Array<{ [key: string]: unknown }>;

  beforeAll(async () => {
    response = await fetch('https://jsonplaceholder.typicode.com/posts');
    body = await response.json();
  }, BEFORE_ALL_TIMEOUT);

  test('Should have response status 200', () => {
    expect(response.status).toBe(200);
  });

  test('Should have content-type', () => {
    expect(response.headers.get('Content-Type')).toBe(
      'application/json; charset=utf-8'
    );
  });

  test('Should have array in the body', () => {
    expectTypeOf(body).toBeArray();
  });

  test('The first item in array should contain userId 1 in caption key', () => {
    expect(body[0].userId).to.equal(1);
  });
});
