import { LinkContainer } from "react-router-bootstrap";
import { useRef } from "react";

export function HomePage() {
  const zipCodeRef = useRef<HTMLInputElement>(null);
  const keywordsRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    ref: React.RefObject<HTMLInputElement>
  ) => {
    if (event.key === "Tab" && ref.current) {
      event.preventDefault();
      ref.current.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const zipCode = zipCodeRef.current?.value;
    const keywords = keywordsRef.current?.value;
    // Perform form submission logic using zipCode and keywords
    console.log("Searching with zip code:", zipCode);
    console.log("Searching with keywords:", keywords);
  };

  return (
    <div style={{ paddingLeft: 350, paddingTop: 50 }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="zip code"
          style={{ marginRight: 10 }}
          ref={zipCodeRef}
          onKeyDown={(e) => handleKeyDown(e, keywordsRef)}
        />
        <input
          type="text"
          placeholder="keywords: flute, wedding, singer, etc"
          style={{ marginRight: 10 }}
          ref={keywordsRef}
          onKeyDown={(e) => handleKeyDown(e, zipCodeRef)}
        />

        <LinkContainer to={"/ResultsPage"}>
          <button type="submit">Search</button>
        </LinkContainer>
      </form>
    </div>
  );
}