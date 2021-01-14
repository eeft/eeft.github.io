
export class PlayerProfile {
  constructor(profile = {}) {
    this.skills = profile ? profile.skills : {};
  }
}