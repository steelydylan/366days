type AuthorProps = {
  name: string;
  avatar: string;
  twitterUsername: string;
};

export const authors: AuthorProps[] = [
  {
    name: "pomi",
    avatar: "/images/mayo.jpg",
    twitterUsername: "v2Y0tQ8zpK7qjoR"
  }
];

export const getAuthorFromName = (name: string) => {
  return authors.find(author => {
    return author.name === name;
  });
};
