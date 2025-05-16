import { Inngest } from "inngest";
import connectDB from "./bd";
import User from "@/models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "my-app" });

// function for user creation

export const synsUserCreation = inngest.createFunction(
	{
		id: "sync-user-from-clerk",
	},
	{ event: "clerk/user.created" },
	async ({ event }) => {
		const { id, first_name, last_name, email_addresses, image_url } =
			event.data;
		const UserData = {
			_id: id,
			email: email_addresses[0].email_address,
			name: first_name + " " + last_name,
			imageUrl: image_url,
		};
		await connectDB();
		await User.create(UserData);
	}
);

// function for user updating info

export const syncUserUpdate = inngest.createFunction(
	{
		id: "update-user-from-clerk",
	},
	{ event: "clerk/user.updated" },
	async ({ event }) => {
		const { id, first_name, last_name, email_addresses, image_url } =
			event.data;
		const userData = {
			_id: id,
			email: email_addresses[0].email_address,
			name: "first_name" + " " + last_name,
			imageUrl: image_url,
		};
		await connectDB();
		await User.create(userData);
	}
);

// function for user deleted

export const syncUserDelete = inngest.createFunction(
	{
		id: "delete-user-from-clerk",
	},
	{ event: "clerk/user.deleted" },
	async ({ event }) => {
		const { id } = event.data;
		await connectDB();
		await User.findByIdAndDelete(UserData);
	}
);
