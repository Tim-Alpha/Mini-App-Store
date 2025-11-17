// Minimal SDK surface for mini-apps to interact with host shell.
// In production, these calls would be proxied into the host runtime bridge.
export const platform = {
  user: {
    async getProfile() {
      // Host will implement RPC -> here we only declare types/stubs.
      return { id: 'user_123', name: 'Demo User' };
    }
  },
  media: {
    async getPhotos(opts?: { limit?: number }) {
      // Host should present native picker and return safe data.
      return [{ uri: 'file:///tmp/photo1.jpg', name: 'photo1.jpg' }];
    }
  },
  navigation: {
    closeMiniApp() {
      // Notify host to close.
      console.log('requesting close');
    }
  },
  storage: {
    async getItem(key: string) { return null; },
    async setItem(key: string, value: string) { return true; }
  }
};
