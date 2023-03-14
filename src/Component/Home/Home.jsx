import "./Home.css";
import About from "../About/About";
// import $ from "jquery";

export default function Home() {
  // var ProjectOffset = $("#projects").offset().top;

  // $(window).on("scroll", () => {
  //   let Wscroll = $(window).scrollTop();
  //   if (Wscroll > ProjectOffset) {
  //     $("#navbar").css("background-color", "red");
  //   }
  // });

  return (
    <div className="Home">
      <About />
    </div>
  );
}
