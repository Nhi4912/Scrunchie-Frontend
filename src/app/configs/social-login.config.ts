import {
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from 'angularx-social-login';

export const SocialLoginConfig = {
  provide: 'SocialAuthServiceConfig',
  useValue: {
    autoLogin: false,
    providers: [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(
          '91731913949-oseir28c8jge8udsbte7a77np8p4f2o1.apps.googleusercontent.com'
        ),
      },
    ],
  } as SocialAuthServiceConfig,
};
