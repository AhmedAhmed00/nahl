import React from "react";
import { useLocation } from "react-router-dom";

export default function AnimatedRoutes() {
  const { location } = useLocation();
  return <div>AnimatedRoutes</div>;
}
