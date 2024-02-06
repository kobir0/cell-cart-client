import { useEffect, useState } from "react";

const useRole = (email) => {
  const [roleLoading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState([]);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5001/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserRole(data.user);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [email]);
  return [userRole, roleLoading];
};
export default useRole;
