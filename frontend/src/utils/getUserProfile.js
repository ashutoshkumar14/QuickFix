const getStoredProfile = (defaultName, defaultInitials) => {
  try {
    const rawUser =
      localStorage.getItem('quickfix_user') ||
      localStorage.getItem('user') ||
      localStorage.getItem('currentUser');

    if (rawUser) {
      const parsed = JSON.parse(rawUser);

      const userData = parsed.user || parsed;

      const realName =
        userData.fullName ||
        userData.full_name ||
        userData.name;

      if (realName && typeof realName === 'string') {
        const names = realName.trim().split(' ').filter(Boolean);

        const inits =
          names.length > 1
            ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
            : names[0].slice(0, 2).toUpperCase();

        return {
          name: realName,
          initials: inits,
          email: userData.email || ''
        };
      }
    }
  } catch (e) {
    console.warn('Profile parse error:', e);
  }

  return {
    name: defaultName,
    initials: defaultInitials,
    email: ''
  };
};

export default getStoredProfile;