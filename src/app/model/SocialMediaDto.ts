export interface SocialMedia{
  id: string
  name: string
  link: string
  description: string
}


export interface SocialMediaModel{
  list: []
  socialMediaObj: SocialMedia
  errorMessage: string
}


