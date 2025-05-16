import { serve } from "inngest/next";
import {
	inngest,
	syncUserDelete,
	syncUserUpdate,
	syncUserCreation,
} from "../../../config/inngest";

// Create an API that serves xero functions
export const { GET, POST, PUT } = serve({
	client: inngest,
	functions: [syncUserCreation, syncUserDelete, syncUserUpdate],
});
