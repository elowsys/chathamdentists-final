import { SocialItem } from './social-item';

export interface TeamMember {
  fullName: string;
  photoUrl: string;
  description: string;
  qualification: string;
  gdcRegNum: string;
  socialItems: SocialItem[];
}
