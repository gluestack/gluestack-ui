function getTimeAgoString(pastDate: any) {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - pastDate.getTime();

  if (timeDifference < 60000) {
    return 'just now';
  } else if (timeDifference < 3600000) {
    const minutes = Math.floor(timeDifference / 60000);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < 86400000) {
    const hours = Math.floor(timeDifference / 3600000);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < 604800000) {
    const days = Math.floor(timeDifference / 86400000);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < 2592000000) {
    const weeks = Math.floor(timeDifference / 604800000);
    return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < 31536000000) {
    const months = Math.floor(timeDifference / 2592000000);
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(timeDifference / 31536000000);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  }
}
export const content1 = [
  {
    title: 'Building gluestack-style',
    name: 'Sanket Sahu',
    date: getTimeAgoString(new Date('2023-07-08')),
    bannerImage: '/images/sanket-react-nexus.png',
    link: 'https://www.youtube.com/watch?v=EFTCeK8aXTU',
    isExternal: true,
  },
];
