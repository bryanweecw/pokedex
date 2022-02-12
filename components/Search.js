import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState();
  const submitSearch = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/pokemon/[pokename]",
      query: { pokename: search.toLowerCase() },
    });
    form1.reset();
  };
  return (
    <>
      <form name="form1" onSubmit={submitSearch} className={styles.search}>
        <a
          href="https://www.youtube.com/watch?v=aFTyJDjfjG0&ab_channel=JoeRally"
          target="_blank"
        >
          Search
        </a>{" "}
        for{" "}
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="a Pokemon!"
          className={styles.code}
          type="text"
          required
        />
        <button type="submit" className={styles.gobutton}>
          Go!
        </button>
      </form>
    </>
  );
}
