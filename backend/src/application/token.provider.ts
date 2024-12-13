export interface IHashProvider {
  encode(payload: string, duration: string): string;

  decode(payload: string, duration: string): string;
}
