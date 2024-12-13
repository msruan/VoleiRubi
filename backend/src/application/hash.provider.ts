export interface IHashProvider {
  hash(payload: string): string;
  verify(payload: string, hashed: string): boolean;
}
