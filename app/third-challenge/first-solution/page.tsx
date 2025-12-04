"use client";

import { useEffect, useState } from "react";
import { fetchUserNameAndEmail } from "./actions";

// Client Component
export default function UserProfileServerAction() {
  const [data, setData] = useState<{ name: string; email: string } | null>(null);
  useEffect(() => {
    const getData = async () => {
      const result = await fetchUserNameAndEmail({ id: "1" });
      setData(result);
    }
    getData();
  }, [])

  return (
    <div>
      <h2>Server Action RPC Example</h2>
      {data && (
        <>
          <div>{data.name}</div>
          <div>{data.email}</div>
        </>
      )}
    </div>
  );
}
