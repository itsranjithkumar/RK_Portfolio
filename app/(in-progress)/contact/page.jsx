import { Transition } from '@/app/_layout';
import { InProgress } from '@/app/_components';

export const metadata = {
  title: 'Contact',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
};

export default function Contact() {
  return (
    <Transition>
      <InProgress>Contact Page</InProgress>
    </Transition>
  );
}
