export interface ApiResponse<T> {
  isSuccess: boolean;
  message: string;
  errors: string[];
  isFailure: boolean;
  value: T;
}
