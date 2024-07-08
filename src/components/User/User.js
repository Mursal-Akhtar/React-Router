import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="text-white bg-gray-600 text-3xl p-4 text-center">
        User : {userid}
      </div>
    </>
  );
}
