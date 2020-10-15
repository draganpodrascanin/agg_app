// import Email from './Email';
// import { User } from '../../entity/User';
// import { EmailTemaplates } from '../../enum/EmailTemplates';

// class PasswordResetEmail extends Email {
//   private url: string;
//   constructor(user: User, url: string) {
//     super(user.email, user.firstName), (this.url = url);
//   }

//   async sendPasswordReset() {
//     await this.send(
//       EmailTemaplates['passwordReset'],
//       'Your password reset token (valid for only 10 minutes)',
//       { url: this.url }
//     );
//   }
// }

// export default PasswordResetEmail;
