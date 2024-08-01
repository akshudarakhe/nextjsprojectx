
// import React from 'react';
// import styles from './page.module.css';


// const ContactPage = () => {
//   return (
//     <div className={styles.contactPage}>
//       <div className={styles.contactHeader}>
//         <h1>Let's talk</h1>
//         <p>Fill in the form below, or contact us directly - <a href="mailto:contact@xfive.co">contact@xfive.co</a> and we will get back to you as soon as possible.</p>
//       </div>
//       <div className={styles.contactForm}>
//         <form>
//           <div className={styles.formGroup}>
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" name="name" required />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" required />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="message">Message</label>
//             <textarea id="message" name="message" required></textarea>
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="file">Upload File</label>
//             <input type="file" id="file" name="file" />
//           </div>
//           <div className={styles.formFooter}>
//             <div className={styles.captcha}>
//               <label>
//                 <input type="checkbox" required />
//                 I am human
//               </label>
//             </div>
//             <button type="submit" className={styles.submitButton}>Submit</button>
//           </div>
//         </form>
//         <div className={styles.contactInfo}>
//           <div className={styles.contactText}>
//             <h2>Hi, I'm Karolina. I look forward to discussing your project.</h2>
//           </div>
//           <div className={styles.contactImage}>
//             <img src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Karolina Brewczynska" />
//             <p>Karolina Brewczynska</p>
//             <p>Business Development Manager</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;






'use client'
import React from 'react';
import styles from './page.module.css';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@radix-ui/react-checkbox';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form } from 'react-hook-form';
import { useForm, Controller } from 'react-hook-form';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactHeader}>
        <h1>Let's talk</h1>
        <p>Fill in the form below, or contact us directly - <a href="mailto:contact@xfive.co">contact@xfive.co</a> and we will get back to you as soon as possible.</p>
      </div>

      <div className={styles.contactForm}>
        <form>
          <div className={styles.formGroup}>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required></Textarea>
          </div>
          <div className={styles.formGroup}>
            <Label htmlFor="file">Upload File</Label>
            <Input type="file" id="file" name="file" />
          </div>
          <div className={styles.formFooter}>
            <div className={styles.captcha}>
              <Label>
                <Input type="Checkbox" required />
                I am human
              </Label>
            </div>
            <Button type="submit" variant="default">Submit</Button>
          </div>
        </form>
        <div className={styles.contactInfo}>
          <div className={styles.contactText}>
            <h2>Hi, I'm Karolina. I look forward to discussing your project.</h2>
          </div>
          <div className={styles.contactImage}>
            <img src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Karolina Brewczynska" />
            <p>Karolina Brewczynska</p>
            <p>Business Development Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
