export interface UserProfile { id: string; name: string; }
export const platform: {
  user: { getProfile(): Promise<UserProfile> };
  media: { getPhotos(opts?: {limit?:number}): Promise<Array<{uri:string,name?:string}>> };
  navigation: { closeMiniApp(): void };
  storage: { getItem(key:string): Promise<string|null>; setItem(key:string,value:string): Promise<boolean> };
};
