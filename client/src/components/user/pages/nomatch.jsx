import { useLocation } from "react-router-dom";
const NoMatch = () => {
  let location = useLocation();
  console.log(location);
  return (
    <>
      <h3 style={{ marginTop: "6rem" }}>
        No Match for <code>{location.pathname}</code>{" "}
      </h3>
    </>
  );
};

export default NoMatch;
