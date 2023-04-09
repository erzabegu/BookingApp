import AuthRoutes from "./authRoute";
import React from "react";
import UnAuthRoutes from "./unauthRoute";

const Routing = () => {
    const token = undefined;
    if (token) {
        return <AuthRoutes/>
    } else {
        return <UnAuthRoutes/>
    }
}

export default Routing;