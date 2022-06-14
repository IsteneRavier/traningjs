function initiTab() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}

initiTab();

function iniAccordion() {
  const accordinList = document.querySelectorAll(".js-accordion dt");
  if(accordinList.length) { 
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
iniAccordion();
