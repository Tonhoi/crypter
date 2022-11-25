import { routes } from "../configs";
import { Home } from "../pages/Home";

const privateRouters = [];

const publicRouters = [{ path: routes.home, element: Home }];

export { privateRouters, publicRouters };
