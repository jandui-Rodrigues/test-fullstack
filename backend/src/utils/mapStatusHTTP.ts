const statusHTTP = [
  'NOT_FOUND',
  'SUCCESSFUL',
  'CREATED',
];

export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    [statusHTTP[0]]: 404,
    [statusHTTP[1]]: 200,
    [statusHTTP[2]]: 201,
  };
  return statusHTTPMap[status] ?? 500;
}
