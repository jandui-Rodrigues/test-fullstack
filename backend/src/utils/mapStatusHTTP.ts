const statusHTTP = [
  'NOT_FOUND',
  'SUCCESSFUL',
  'CREATED',
];

export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    [statusHTTP[2]]: 404,
    [statusHTTP[3]]: 200,
    [statusHTTP[5]]: 201,
  };
  return statusHTTPMap[status] ?? 500;
}
