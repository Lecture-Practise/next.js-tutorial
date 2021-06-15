import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0 " }}>
          <img
            src="/images/Ahri_16.jpg"
            alt="log"
            style={{ display: "block", width: 80, borderRadius: "50%" }}
          />
        </div>
        <div as="h1">넥스트 TEST</div>
      </div>
      <Gnb />
    </div>
  );
}
