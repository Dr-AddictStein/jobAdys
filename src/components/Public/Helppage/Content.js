
import styles from '@/styles/Helppage/Content.module.css';

const sections = [
  {
    title: 'FAQ (Frequently Asked Questions)',
    items: [
      {
        subtitle: `1. General Information`,
        content: `JobAdys is a social networking platform designed to connect Orderers, Performers, and Administrators in a structured and efficient way.
User Roles:
   • Orderer: Can create job orders, edit them, select and approve a preferred Performer, and close completed orders.
   • Performer: Can browse available job orders, submit requests to work on them, communicate with the Orderer, and mark tasks as completed.
   • Administrator: Has the ability to manage all users and job offers, ensuring compliance with platform rules. If an offer or user violates the guidelines, the Administrator can edit or delete offers and user accounts.
User Profiles:
  • Each user can edit their profile, but some information (such as profile photos and usernames) is publicly visible.
  • Users will have access to a Frequently Asked Questions page specific to their role.
  • There will be dedicated subpages for Privacy Policy and general platform information.
  • Users can contact the Administrator directly with any questions or issues.`,
      },
      {
        subtitle: '2. Account Creation, Updates & Deletion',
        content: `• Creating an Account: To sign up, users must provide a valid email address and set a password. Additional profile details may be required based on user type (Orderer, Performer).
• Updating Account Information: Users can update their profile settings, including contact details, bio, and profile picture.
• Deleting an Account: If a user wishes to delete their account, they must contact the Administrator, who will review and process the request.`,
      },
      {
        subtitle: '3. Offer Listings',
        content: `Posting a Offer(For Submitter):
• Navigate to the "New Offer" section.
• Provide a clear job title, description, expected deadline, and requirements.
• Publish the order so Performers can apply.
• Once applications are received, select and approve the preferred Performer.
Applying for a Offer (For Performers):
• Browse available offer listings and submit a request to work on an order.
• Once accepted, communicate with the Submitter regarding details and deadlines.
• Upon completion, mark the task as "Completed" on the platform.
Managing Listings:
• Submitters can edit, update, or close job orders at any time.
• Both Submitters and Performers can track job progress through their dashboards.`,
      },
      {
        subtitle: '4. Messaging & Notifications',
        content: `Communication Features:
• Users can message each other within the platform to discuss job details, expectations, and progress.
• Submitters and Performers are encouraged to communicate only within JobAdys to maintain transparency and avoid misunderstandings.
Notifications:
• Users will receive notifications about new job offers, order approvals, and important account updates.
• Notification settings can be customized in the user profile.`,
      },
      {
        subtitle: '5. Payment & Transactions',
        content: `️ !!Important: JobAdys does not provide a built-in payment system. The platform is designed for networking and gaining experience, not financial transactions.
Handling Payments Independently:
• If an Submitter chooses to compensate a Performer, the payment must be handled outside of JobAdys.
• Users are encouraged to agree on payment terms in advance and use secure payment methods (e.g., PayPal, bank transfers).
JobAdys is NOT responsible for:
• Ensuring payments are made.
• Disputes or disagreements over financial transactions.
• Fraudulent payment activities.
Best Practices for Safe Payments:
• Define payment terms clearly before starting work.
• Keep proof of agreements (e.g., screenshots, contracts).
• Avoid making payments to unknown or unverified users.
`,
      },
      {
        subtitle: '6. Troubleshooting (Common Issues & Solutions)',
        content: `️ Login Problems:
• Ensure you’re using the correct email and password.
• Reset your password if necessary via the "Forgot Password" link.
• Clear your browser cache or try logging in from another device.
Page Errors / Bugs:
• Refresh the page or try accessing it from a different browser.
• Check if JobAdys is undergoing maintenance (notifications will be posted).
• If the issue persists, report it to the Administrator via the Contact page.
`,
      },
    ],
  },
    {
      title: 'Privacy Policy',
      items: [
        {
          subtitle: '1. Data Collection',
          content: `We collect personal and non-personal information to provide and improve our services. This includes:
    
    • Personal Information: Name, email address, phone number, location, profile details, and job-related information when you create an account.
    • Usage Data: How you interact with JobAdys, including login times, searches, and job applications.
    • Device & Browser Information: IP address, browser type, operating system, and cookies for security and analytics purposes.
    • Payment Information: If you purchase premium services, we collect payment details (handled securely by third-party payment processors).
    
    💡 Why We Collect This Data:
    • To create and manage your account.
    • To match job seekers with employers efficiently.
    • To enhance platform security and prevent fraud.
    • To analyze trends and improve user experience.`,
        },
        {
          subtitle: '2. Data Protection',
          content: `Your data security is our priority. We implement strict security measures, including:
    
    • Encryption: Sensitive data is encrypted during transmission and storage.
    • Access Control: Only authorized personnel have access to user data.
    • Regular Security Audits: We continuously monitor for potential vulnerabilities and apply necessary updates.
    • Secure Authentication: Two-factor authentication (2FA) is available to protect your account.
    
    🔒 How You Can Protect Your Data:
    • Use a strong, unique password.
    • Enable 2FA for added security.
    • Be cautious about sharing sensitive information.`,
        },
        {
          subtitle: '3. Third-Party Sharing',
          content: `We do not sell or rent your personal data. However, we may share certain information in the following cases:
    
    • With Your Consent: When you agree to share information with employers or other users.
    • For Legal Reasons: If required by law enforcement or regulatory authorities.
    • With Service Providers: Trusted third parties (e.g., payment processors, analytics tools) that help us operate JobAdys.
    • Business Transfers: In case of a merger, acquisition, or sale of assets, user data may be transferred to the new entity.
    
    📌 Your Control:
    You can review and manage what information you share with others in your account settings.`,
        },
        {
          subtitle: '4. Cookies and Tracking',
          content: `Cookies help us improve your experience on JobAdys. We use:
    
    • Essential Cookies: Required for website functionality (e.g., login sessions).
    • Analytics Cookies: Track usage patterns to improve our services.
    • Advertising Cookies: Display relevant job recommendations and ads.
    
    🍪 Your Choices:
    • You can modify cookie preferences in your browser settings.
    • Opt-out of targeted advertising via third-party tools like AdChoices.`,
        },
        {
          subtitle: '5. User Rights',
          content: `You have control over your data. Your rights include:
    
    • Access & Review: View the personal information we store.
    • Correction: Update inaccurate or outdated information.
    • Deletion: Request account deletion and data removal.
    • Opt-Out: Unsubscribe from marketing emails or restrict certain data processing.
    
    📩 How to Exercise Your Rights:
    Send a request to our support team, and we will process it within the required legal timeframe.`,
        },
        {
          subtitle: '6. Compliance with Privacy Laws',
          content: `We adhere to major data protection regulations, including:
    
    • GDPR (General Data Protection Regulation) – For users in the EU, ensuring transparency and control over personal data.
    • CCPA (California Consumer Privacy Act) – Providing California residents with rights over their personal information.
    
    ⚖️ Our Commitment:
    We stay updated with legal requirements and ensure compliance with international privacy standards.`,
        },
        {
          subtitle: 'Final Notes',
          content: `Your privacy matters to us. If you have any questions or concerns about how we handle your data, contact our Privacy Team at support@jobadys.com.`,
        },
      ],
        title: 'Security Tips',
        items: [
          {
            subtitle: '1. Account Protection',
            content: `Your account is your gateway to JobAdys, so keeping it secure is crucial. Here’s how:
      
      • Use a Strong Password: Create a unique password with a mix of uppercase and lowercase letters, numbers, and special characters. Avoid using common words or easily guessable information (e.g., your name or birthdate).
      • Enable Two-Factor Authentication (2FA): This adds an extra layer of security by requiring a verification code in addition to your password. If JobAdys offers 2FA, enable it in your account settings.
      • Avoid Using Public Wi-Fi for Login: Public networks can be insecure. If you must use one, consider using a VPN to encrypt your connection.
      • Log Out from Shared Devices: If you access your account on a public or shared device, always log out when you’re done.`,
          },
          {
            subtitle: '2. Phishing & Scams',
            content: `Cybercriminals may try to trick you into revealing personal information through fake emails, messages, or websites. Here’s how to protect yourself:
      
      • Beware of Suspicious Emails and Messages: JobAdys will never ask for your password via email or message. If you receive such a request, ignore it.
      • Check URLs Before Clicking: If you receive an email claiming to be from JobAdys, hover over links to see the actual URL before clicking. Avoid links that look suspicious.
      • Verify Employer and Job Offers: If a job offer sounds too good to be true, it probably is. Always research the company and verify the employer before sharing personal details.
      • Never Share Sensitive Information: Do not provide bank details, passwords, or identification documents unless absolutely necessary and to verified entities.`,
          },
          {
            subtitle: '3. Personal Data Safety',
            content: `Protecting your personal information is essential to avoid identity theft and fraud. Follow these steps:
      
      • Limit Public Information: Be mindful of what you share on your JobAdys profile and in messages with other users.
      • Adjust Privacy Settings: Use JobAdys’ privacy settings to control who can see your information.
      • Secure Your Email Account: Since your email is often linked to your JobAdys account, enable security features like recovery options and two-factor authentication on your email.
      • Use Unique Passwords for Different Platforms: Avoid using the same password for multiple websites, especially your email and JobAdys account.`,
          },
          {
            subtitle: '4. Device Security',
            content: `Keeping your devices secure ensures that hackers and malware don’t gain access to your account. Follow these recommendations:
      
      • Install a Reliable Antivirus Program: Protect your device from malware, keyloggers, and viruses.
      • Keep Your Software Updated: Always update your browser, operating system, and security software to the latest versions.
      • Enable Firewall Protection: Firewalls add an extra layer of defense against unauthorized access to your device.
      • Use Secure Browsers: Stick to well-known browsers like Chrome, Firefox, or Safari, and avoid downloading software from untrusted sources.`,
          },
          {
            subtitle: '5. Reporting Suspicious Activity',
            content: `If you notice any unusual activity, such as unauthorized logins, fake job listings, or suspicious messages, report it immediately. Here’s how:
      
      • Report Fake Employers or Job Listings: If a job posting seems fraudulent, report it through the JobAdys platform.
      • Block and Report Suspicious Users: If someone is harassing you or acting suspiciously, use the blocking and reporting features.
      • Contact Support for Security Concerns: If you suspect your account has been compromised, reset your password and contact JobAdys customer support immediately.
      
      By following these security tips, you can protect yourself and your personal information while using JobAdys. If you ever have security concerns, don’t hesitate to reach out to our support team.`,
          },
        ],
        title: 'Contact & Support',
  items: [
    {
      subtitle: 'Customer Support',
      content: `At JobAdys, we are here to assist you with any questions, concerns, or platform-related issues. Our support team is available through multiple channels:

📧 Email Support: Reach out to us at support@jobadys.com for detailed assistance.
❓ Help Center: Browse our FAQs and troubleshooting guides to find quick answers.

For urgent issues, we recommend using Live Chat or Phone Support for the fastest response.`,
    },
    {
      subtitle: 'Business Inquiries',
      content: `For partnerships, collaborations, advertising, or other business-related discussions, please contact our business team:

📧 Email: business@jobadys.com
🏢 B2B Partnerships: If you're an employer or recruiter looking for tailored solutions, reach out to us for more details.

Our business team typically responds within 2–4 business days.`,
    },
    {
      subtitle: 'Feedback & Suggestions',
      content: `We value your feedback and always strive to improve the JobAdys experience. Let us know how we can make the platform better!

📩 Feedback Form: Fill out our online form here to share your thoughts.
⭐ Feature Requests: Have an idea for a new feature? Send us your suggestions at ideas@jobadys.com.
🗳️ Surveys & Polls: Participate in our occasional user surveys to help shape JobAdys.

Your input helps us grow and provide a better service for job seekers and employers alike!`,
    },
    {
      subtitle: 'Social Media',
      content: `Stay updated on the latest job listings, platform updates, and career tips by following us on social media:

🌐 Facebook: facebook.com/jobadys
📷 Instagram: instagram.com/jobadys
💼 LinkedIn: linkedin.com/company/jobadys
🐦 Twitter (X): twitter.com/jobadys

Send us a message on any platform if you prefer reaching out through social media!`,
    },
  ],
      
  },
];

const Content = () => {
  return (
    <section className={styles.Content}>
      <div className={styles.timelineContainer}>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={styles.timelineBlock}>
            {/* Main title with timeline circle */}
            <div className={styles.timelineTitle}>
              <div className={styles.circle}></div>
              <h2>{section.title}</h2>
            </div>

            {/* Subsections */}
            <div className={styles.sectionItems}>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className={styles.subItem}>
                  <h3>{item.subtitle}</h3>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;
