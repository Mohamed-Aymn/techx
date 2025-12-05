"use server";

// Our "database" with one user
const userDB: Record<string, User> = {
  "1": {
    id: "1",
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    hobbies: ["reading", "coding"],
    social: { twitter: "@jane", github: "janedoe" },
  },
};

export async function fetchUserNameAndEmail({ id }: { id: string }) {
  const user = userDB[id];

  if (!user) {
    throw new Error("User not found");
  }

  // Only return the fields we need
  const result = {
    name: user.name,
    email: user.email,
  };

  return result;
}