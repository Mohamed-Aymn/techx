"use client";
import { useEffect, useState } from "react";

export default function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then((data) => {
        // We only need name & email
        setUser({ name: data.name, email: data.email });
      });
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>REST API Example</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
