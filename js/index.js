window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
  {
    document.getElementById("navbar").style.padding = "0rem 0";
    document.getElementById("navbar").style.boxShadow = "0px 0px 10px 0px var(--bgcolor-shadow)";
  }
  else
  {
    document.getElementById("navbar").style.padding = "0.5rem 0";
    document.getElementById("navbar").style.boxShadow = "0px 0px 10px 0px var(--bgcolor-light-ll)";
  }
}

function copyGlass () {
  const el = document.createElement('textarea');
  el.value = `.ui-glass {
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(40px);
    border: 2px solid transparent;
    background-clip: padding-box;
    }

    .ui-container-glass {
    background-image: linear-gradient(
        to top right,
        darkgreen 50%,
        lightgreen 100%
    );
    }`;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
