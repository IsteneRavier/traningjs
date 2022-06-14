export default function iniAccordion() {
  const accordinList = document.querySelectorAll('[data-anime="accordion"] dt');

  if (accordinList.length) {
    accordinList[0].classList.add("ativo");
    accordinList[0].nextElementSibling.classList.add("ativo");

    function activeAccordion(event) {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordinList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}



