import { NextRequest, NextResponse } from "next/server";

// Simulated database
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userDB: Record<string, any> = {
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

// GET - fetch user by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = userDB[params.id];
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(user);
}

// POST - create new user
export async function POST(req: NextRequest) {
  const data = await req.json();
  if (!data.id) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }
  if (userDB[data.id]) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }
  userDB[data.id] = data;
  return NextResponse.json(userDB[data.id], { status: 201 });
}

// PUT - replace user by ID
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = userDB[params.id];
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const data = await req.json();
  // Replace entire user
  userDB[params.id] = { ...data, id: params.id };
  return NextResponse.json(userDB[params.id]);
}

// PATCH - update partial fields of user
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = userDB[params.id];
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const data = await req.json();
  // Merge only provided fields
  userDB[params.id] = { ...user, ...data };
  return NextResponse.json(userDB[params.id]);
}

// DELETE - remove user
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = userDB[params.id];
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  delete userDB[params.id];
  return NextResponse.json({ message: `User ${params.id} deleted` });
}
