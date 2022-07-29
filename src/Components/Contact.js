import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div>
      <h2>Let's Connect!</h2>
      <div >
        <a href="https://github.com/umapreethi-dev" className="link1">
          <BsGithub className=" social-icon footer" size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/umapreethi-santhanakrishnan/"
          className="link1"
        >
          <BsLinkedin className="social-icon footer" size={30} />
        </a>
        <a href="mailto:umapreethi123.up@gmail.com" className="link1">
         
          <MdEmail className="social-icon footer" size={30} />
        </a>
      </div>
      <p>© 2022 All Rights Reserved, Made by Uma</p>
    </div>
  );
}
