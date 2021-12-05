import Image from "next/image";
import { MdPhoneAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import LinkedIn from "../public/social/linkedin.svg";
import StackOverflow from "../public/social/stackOverflow.svg";
import Github from "../public/social/git.svg";

export const Profile = () => (
  <div className="md:min-w-100 bg-dusk p-6 rounded-lg">
    <h1 className="w-fit font-bold text-4xl mb-2">Vijay P R</h1>
    <div className="text-mist text-xs">Full Stack Javascript engineer</div>

    <address className="mt-6 not-italic">
      <div className="flex flex-col sm:flex-row-reverse	row-reverse justify-between lg:flex-col gap-4">
        <div className="flex flex-col gap-4">
          <a
            href="tel:+91-7022356026"
            className="flex gap-1"
            aria-label="phone"
          >
            <MdPhoneAndroid className="self-center" size={18} />
            <div>+91-7022356026</div>
          </a>

          <a href="mailto: vijayprwyd@gmail.com" className="flex gap-1">
            <MdEmail className="self-center" size={18} />
            <div>vijayprwyd@gmail.com</div>
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-1">
            <MdLocationOn className="self-center" size={18} />
            <div>Bengaluru</div>
          </div>

          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/vijay-p-r-133147131/">
              <Image alt="Linkedin" src={LinkedIn} width={32} height={32} />
            </a>
            <a href="https://stackoverflow.com/users/3950280/vijay-p-r">
              <Image
                alt="Stack Overflow"
                src={StackOverflow}
                width={32}
                height={32}
              />
            </a>
            <a href="https://github.com/vijayprwyd">
              <Image alt="Github" src={Github} width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
    </address>
  </div>
);
