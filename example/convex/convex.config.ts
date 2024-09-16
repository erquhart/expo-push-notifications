import { defineApp } from "convex/server";
import pushNotifications from "../../src/component/convex.config.js";

const app = defineApp();
app.use(pushNotifications, { name: "pushNotifications" });

export default app;