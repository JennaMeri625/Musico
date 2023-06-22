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




    // Programmatically navigate to the ResultsPage
    // Replace "/ResultsPage" with the correct path
    window.location.href = "/ResultsPage";
  };




  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "200px" }}>
          <input
            type="text"
            placeholder="zip code"
            style={{ marginBottom: 10, border: "5px solid black", textAlign: "center" }}
            ref={zipCodeRef}
            onKeyDown={(e) => handleKeyDown(e, keywordsRef)}
          />
          <input
            type="text"
            placeholder="keywords: flute, wedding, singer, etc"
            style={{ marginBottom: 10, border: "5px solid black", textAlign: "center", width: "300px" }}
            ref={keywordsRef}
            onKeyDown={(e) => handleKeyDown(e, zipCodeRef)}
          />
          <button
            type="submit"
            style={{ backgroundColor: "black", color: "white", fontWeight: "bold", padding: "10px 20px", border: "none" }}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
