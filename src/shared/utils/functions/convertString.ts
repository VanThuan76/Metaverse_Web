const convertStringWithSpace = (s: string): string[] => {
  const regex = /^(\+\d+)(?:\/n\/|\s+)(.*)$/;
  const match = s.match(regex);
  if (!match) {
    return [];
  }
  return match;
};

export default convertStringWithSpace;
