export default interface AuthenticateOptions {
  code?: string;
  username?: string;
  password?: string;
  securityToken?: string;
  assertion?: string;
  refreshToken?: string;
}
