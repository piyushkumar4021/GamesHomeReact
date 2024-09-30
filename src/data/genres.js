import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { BsNintendoSwitch } from 'react-icons/bs';
import { SiSega } from 'react-icons/si';

const genres = [
  {
    id: 1,
    name: 'PC',
    slug: 'pc',
    icon: FaWindows,
  },
  {
    id: 2,
    name: 'PlayStation',
    slug: 'playstation',
    icon: FaPlaystation,
  },
  {
    id: 3,
    name: 'Xbox',
    slug: 'xbox',
    icon: FaXbox,
  },
  {
    id: 4,
    name: 'iOS',
    slug: 'ios',
    icon: MdPhoneIphone,
  },

  {
    id: 5,
    name: 'Apple Macintosh',
    slug: 'mac',
    icon: FaApple,
  },
  {
    id: 6,
    name: 'Linux',
    slug: 'linux',
    icon: FaLinux,
  },
  {
    id: 7,
    name: 'Nintendo',
    slug: 'nintendo',
    icon: BsNintendoSwitch,
  },
  {
    id: 8,
    name: 'Android',
    slug: 'android',
    icon: FaAndroid,
  },
  {
    id: 11,
    name: 'SEGA',
    slug: 'sega',
    icon: SiSega,
  },
];

export default genres;
