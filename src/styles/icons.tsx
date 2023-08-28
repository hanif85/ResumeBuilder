import React from 'react';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineAim, AiFillDelete } from 'react-icons/ai';
import {
  MdVpnKey,
  MdVerifiedUser,
  MdWork,
  MdLocationOn,
  MdCall,
  MdMail,
  MdPermIdentity,
  MdBuild,
  MdEdit,
  MdColorLens,
  MdLibraryBooks,
  MdAddCircleOutline,
  MdPeople,
  MdLabel,
  MdZoomOut,
  MdZoomIn,
  MdSave,
  MdCloudUpload,
  MdPrint,
} from 'react-icons/md';
import {
  SiBehance,
  SiCodechef,
  SiCodeforces,
  SiDevdotto,
  SiDribbble,
  SiExpertsexchange,
  SiHackerearth,
  SiHashnode,
  SiLeetcode,
  SiSquarespace,
  SiTwitter,
} from 'react-icons/si';
import { FaAward, FaMediumM, FaUniversity, FaWordpressSimple, FaHackerrank } from 'react-icons/fa';
import { IoGitBranch, IoReload } from 'react-icons/io5';
import { GoVerified } from 'react-icons/go';
import { GrDrag } from 'react-icons/gr';

const icons = new Map([
  ['mobile', <MdCall key="mobile" />],
  ['email', <MdMail key="email" />],
  ['location', <MdLocationOn key="location" />],
  ['github', <AiOutlineGithub key="github" />],
  ['linkedin', <AiFillLinkedin key="linkedin" />],
  ['hackerrank', <FaHackerrank key="hackerrank" />],
  ['hackerearth', <SiHackerearth key="hackerearth" />],
  ['twitter', <SiTwitter key="twitter" />],
  ['leetcode', <SiLeetcode key="leetcode" />],
  ['devto', <SiDevdotto key="devto" />],
  ['medium', <FaMediumM key="medium" />],
  ['wordpress', <FaWordpressSimple key="wordpress" />],
  ['codechef', <SiCodechef key="codechef" />],
  ['codeforces', <SiCodeforces key="codeforces" />],
  ['behance', <SiBehance key="behance" />],
  ['dribbble', <SiDribbble key="dribbble" />],
  ['hashnode', <SiHashnode key="hashnode" />],
  ['squarespace', <SiSquarespace key="squarespace" />],

  ['identity', <MdPermIdentity key="identity" />],
  ['expert', <SiExpertsexchange key="expert" />],
  ['work', <MdWork key="work" />],
  ['education', <FaUniversity key="education" />],
  ['tool', <MdBuild key="tool" />],
  ['key', <MdVpnKey key="key" />],
  ['certificate', <MdVerifiedUser key="certificate" />],
  ['career', <AiOutlineAim key="career" />],
  ['branch', <IoGitBranch key="branch" />],
  ['skill', <GoVerified key="skill" />],
  ['edit', <MdEdit key="edit" />],
  ['color', <MdColorLens key="color" />],
  ['print', <MdPrint key="print" />],
  ['template', <MdLibraryBooks key="template" />],

  ['drag', <GrDrag key="drag" />],
  ['delete', <AiFillDelete key="delete" />],
  ['add', <MdAddCircleOutline key="add" />],
  ['social', <MdPeople key="social" />],
  ['label', <MdLabel key="label" />],
  ['awards', <FaAward key="awards" />],
  ['zoomin', <MdZoomIn key="zoomin" />],
  ['zoomout', <MdZoomOut key="zoomout" />],
  ['save', <MdSave key="save" />],
  ['upload', <MdCloudUpload key="upload" />],
  ['reset', <IoReload key="reset" />],
]);

export function getIcon(iconName: string) {
  return icons.get(iconName?.toLowerCase());
  // const icon = icons.get(iconName?.toLowerCase());
  // return icon ? React.cloneElement(icon, { key: iconName }) : null;
}
