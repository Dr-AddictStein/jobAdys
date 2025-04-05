import styles from '@/styles/Aboutpage/Content.module.css';

const sections = [
  {
    title: 'About JobAdys',
    items: [
      {
        subtitle: 'What is JobAdys?',
        content: `JobAdys is an innovative platform designed to bridge the gap between beginners and real-world projects. It provides an opportunity for aspiring professionals to gain hands-on experience by working on actual tasks posted by businesses and individuals. Unlike traditional job boards, JobAdys focuses on project-based work, allowing users to develop their skills while building a portfolio that showcases their abilities to future employers or clients.`,
      },
      {
        subtitle: 'Our Mission',
        content: `At JobAdys, our goal is to help newcomers kickstart their careers by giving them access to real projects without requiring prior professional experience. We believe that talent should be nurtured through practice, and that’s why we offer a space where users can learn, grow, and gain confidence in their abilities. By completing projects, participants not only enhance their technical skills but also develop essential soft skills like communication, time management, and client collaboration.`,
      },
      {
        subtitle: 'Who is it for?',
        content: `JobAdys is designed for a wide range of users, including:
• Students – Those looking to gain practical experience while studying.
• Aspiring Freelancers – Beginners who want to start freelancing but lack a portfolio.
• Career Changers – Individuals transitioning into a new industry and seeking hands-on experience.
• Businesses & Entrepreneurs – Those who need affordable solutions for small projects while giving new talent a chance to prove themselves.`,
      },
      {
        subtitle: 'Why Choose JobAdys?',
        content: `Real Projects, Real Experience – Work on actual tasks, not just practice exercises.
• Skill-Building Opportunities – Improve technical and professional skills through real-world application.
• Flexible & Accessible – Choose projects that match your schedule and skill level.
• Portfolio Development – Showcase completed work to attract future clients or employers.
• Supportive Community – Learn from feedback, connect with other users, and grow together.

Whether you're just starting or looking to enhance your portfolio, JobAdys provides a unique space to gain experience and take your first steps into the professional world.`,
      },
    ],
  },
  {
    title: 'How It Works',
    items: [
      {
        subtitle: 'Sign Up & Create a Profile',
        content: `Getting started on JobAdys is simple. Just sign up, create a profile, and showcase your skills. If you’re a Submitter, provide details about the tasks you need completed. If you’re a Performer, highlight your expertise, experience, and past projects to attract potential opportunities. A well-filled profile increases your chances of finding the right match!`,
      },
      {
        subtitle: 'Browse or Post Projects',
        content: `• Submitters: Post tasks or projects, providing clear descriptions, deadlines, and required skills. Make sure to specify your expectations to attract the right talent.
• Performers: Explore available projects and apply for the ones that match your skill set. Submit a proposal, explaining how you’ll complete the task and why you’re the right fit.`,
      },
      {
        subtitle: 'Work & Deliver',
        content: `Once the Submitter selects a Performer, the real work begins! Use JobAdys' built-in messaging system to communicate, clarify details, and ensure a smooth workflow. Performers should follow project requirements, maintain deadlines, and deliver high-quality results.`,
      },
      {
        subtitle: 'Mark as Completed',
        content: `After the work is delivered, the Submitter reviews the results. If everything meets expectations, both the Submitter and Performer confirm project completion. This ensures transparency and guarantees that both parties are satisfied before finalizing the task.

By following these steps, Submitters find skilled Performers, and Performers gain experience and grow their careers – making JobAdys the perfect place to connect and collaborate!`,
      },
    ],
  },
  {
    title: 'Terms of Use',
    items: [
      {
        subtitle: 'User Responsibilities',
        content: `• Users must respect agreements made between Submitters (those posting projects) and Performers (those completing them).
• Meeting deadlines is crucial—deliver work on time as agreed upon with the Submitter.
• Maintain a high standard of quality—delivering subpar work or failing to complete a project may impact your credibility on the platform.
• Communication should be clear and professional—misunderstandings can often be avoided with proper discussions before starting a project.
• Users are responsible for following ethical guidelines and ensuring that all work is original and does not violate intellectual property rights.`,
      },
      {
        subtitle: 'Payment & Transactions',
        content: `• JobAdys does not provide a built-in payment system—our platform is designed to help users gain experience, not to facilitate financial transactions.
• If a Submitter decides to pay a Performer for their work, they must handle the payment independently, outside of JobAdys.
• JobAdys is not responsible for financial agreements, payment disputes, or ensuring that payments are completed.
• Users should take precautions when handling payments, such as using secure methods and clearly defining payment terms before starting work.`,
      },
      {
        subtitle: 'Dispute Resolution',
        content: `• If a conflict arises between a Submitter and a Performer, we encourage both parties to communicate openly and try to reach a resolution.
• JobAdys does not act as a mediator in disputes—users must resolve any disagreements on their own.
• To avoid issues, ensure that all project expectations, deadlines, and potential compensation (if applicable) are clearly agreed upon before starting work.
• If a user consistently fails to fulfill their obligations, they may be subject to account suspension or removal from the platform.
`,
      },
      {
        subtitle: 'Platform Policies',
        content: `All users must adhere to the JobAdys Code of Conduct, which promotes professionalism, respect, and ethical behavior.
The following activities are strictly prohibited on JobAdys:
• Fraudulent behavior or misrepresenting skills.
• Posting or completing projects involving illegal activities.
• Harassment, discrimination, or any form of abuse towards other users.
• Spamming or using the platform for non-relevant activities.
Users who violate these rules may face temporary or permanent account suspension.
`,
      },
      {
        subtitle: 'Privacy & Security',
        content: `JobAdys prioritizes user data protection and does not share personal information with third parties without consent.
Users should avoid sharing sensitive personal details in project discussions.
Ensure your account credentials remain secure—do not share your login details with others.
If you suspect a security issue, report it immediately so our team can take necessary actions

At JobAdys, we aim to create a space where individuals can gain real-world experience by working on practical projects. To maintain a smooth and productive environment, all users must follow these Terms of Use.

By using JobAdys, you agree to abide by these Terms of Use, ensuring a professional and rewarding experience for all users.`,
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
