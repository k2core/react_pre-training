export interface IUserProfile {
  readonly id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  isVerified: boolean;
}
